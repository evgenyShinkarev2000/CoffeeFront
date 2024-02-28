import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";

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
  const [currentUser, setCurrentUserState] = useState(() => {
    const currentUserString = localStorage.getItem("currentUser");

    return currentUserString == null ? null : JSON.parse(currentUserString) as CurrentUser;
  });

  const setCurrentUser = useCallback((user: CurrentUser) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUserState(user);
  }, [setCurrentUserState]);

  const currentUserContext: CurrentUserContexType = useMemo(() => ({
    currentUser,
    setCurrentUser,
  }), [currentUser, setCurrentUser]);

  return <CurrentUserContext.Provider value={currentUserContext}>
    {props.children}
  </CurrentUserContext.Provider>
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}