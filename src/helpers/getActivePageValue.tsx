
export function getActivePageValue(location: string, pageNames: string[]) {
  const locationTokens = new Set(location.split("/"));
  for (const pageName of pageNames) {
    if (locationTokens.has(pageName)) {
      return pageName;
    }
  }
}
