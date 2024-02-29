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
      apolloClient.setLink(buildApolloLink({ currentUserId: event.data.id, currentUserRole: event.data.role }));
      setCurrentUser(event.data);
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
    broadCastChannelRef.current?.postMessage(user);
  }, [setCurrentUser]);

  const currentUserContext: CurrentUserContexType = useMemo(() => ({
    currentUser,
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