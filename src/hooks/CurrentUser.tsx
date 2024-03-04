import { useApolloClient } from "@apollo/client";
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { buildApolloLink } from "src/apollo/client";

type CurrentUserProviderProps = PropsWithChildren & {

};

export type CurrentUser = {
  id: number,
  name: string,
  surname: string,
  patronymic: string,
  role: string,
}

type CurrentUserContexType = {
  currentUser: CurrentUser | null,
  isAdmin: boolean,
  setCurrentUser: (user: CurrentUser) => void,
}

const CurrentUserContext = createContext<CurrentUserContexType>({} as CurrentUserContexType);

export function CurrentUserProvider(props: CurrentUserProviderProps) {
  const apolloClient = useApolloClient();

  const broadCastChannelRef = useRef<BroadcastChannel>();
  const [currentUser, setCurrentUser] = useState(() => getCurrentUserLocalStorage());

  useEffect(() => {
    const broadCastChannel = new BroadcastChannel("CurrentUser");
    const hadnleMessage = (event: MessageEvent<CurrentUser>) => {
      setCurrentUser(event.data);
      apolloClient.setLink(buildApolloLink({
        currentUserId: event.data.id,
        currentUserRole: event.data.role,
      }));
      apolloClient.clearStore();
    }
    broadCastChannel.addEventListener("message", hadnleMessage);
    broadCastChannelRef.current = broadCastChannel;

    return () => {
      broadCastChannel.removeEventListener("message", hadnleMessage);
      broadCastChannel.close();
    };
  }, [setCurrentUser, apolloClient]);

  const handleSetCurrentUser = useCallback((user: CurrentUser) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    apolloClient.setLink(buildApolloLink({
      currentUserId: user.id,
      currentUserRole: user.role,
    }));
    apolloClient.clearStore();
    broadCastChannelRef.current?.postMessage(user);
  }, [setCurrentUser, apolloClient]);

  const currentUserContext: CurrentUserContexType = useMemo(() => ({
    currentUser,
    isAdmin: currentUser?.role == "HRManager",
    setCurrentUser: handleSetCurrentUser,
  }), [currentUser, handleSetCurrentUser]);

  return <CurrentUserContext.Provider value={currentUserContext}>
    {props.children}
  </CurrentUserContext.Provider>
}

export function getCurrentUserLocalStorage() {
  const currentUserString = localStorage.getItem("currentUser");

  return currentUserString == null ? null : JSON.parse(currentUserString) as CurrentUser;
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}