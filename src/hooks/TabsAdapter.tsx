import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useTabsAdapter(pageNameEnum: object): string | false {
  const pageNames = useMemo(() => Object.values(pageNameEnum), [pageNameEnum]);
  const location = useLocation();
  const locationTokens = useMemo(() => new Set(location.pathname.split("/")), [location]);
  return useMemo(() => {
    for (const pageName of pageNames) {
      if (locationTokens.has(pageName)) {
        return pageName;
      }
    }

    return false;
  }, [pageNames, locationTokens]);
} 