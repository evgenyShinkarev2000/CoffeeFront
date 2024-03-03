import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export function useTabsAdapter(pageNameEnum: object): [activePage: string | false, setActipage: (event: React.SyntheticEvent, route: string) => void] {
  const location = useLocation();
  const navigate = useNavigate();

  const pageNames = useMemo(() => Object.values(pageNameEnum), [pageNameEnum]);
  const locationTokens = useMemo(() => new Set(location.pathname.split("/")), [location]);

  const [activePage, setActivePage] = useState(() => findActivePage(pageNames, locationTokens));

  useEffect(() => {
    setActivePage(findActivePage(pageNames, locationTokens));
  }, [locationTokens, pageNames]);

  const setActivePageCallBack = useCallback((event: React.SyntheticEvent, route: string) => {
    setActivePage(findActivePage(pageNames, locationTokens));
    navigate(route);
  }, [navigate]);

  return useMemo(() => [activePage, setActivePageCallBack], [activePage, setActivePageCallBack]);
}

function findActivePage(pageNames: string[], locationTokens: Set<string>) {
  for (const pageName of pageNames) {
    if (locationTokens.has(pageName)) {
      return pageName;
    }
  }

  return false as const;
}