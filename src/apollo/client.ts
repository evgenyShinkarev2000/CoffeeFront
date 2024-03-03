import { ApolloClient, HttpLink, HttpOptions, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { DeepPartial } from "src/helpers/DeepPartial";
import { getCurrentUserLocalStorage } from "src/hooks/CurrentUser";

export type BuildApolloLinkOptions = DeepPartial<{
  currentUserId: number,
  currentUserRole: string,
}>


export function buildApolloLink(options?: BuildApolloLinkOptions) {
  const httpLinkOptions: HttpOptions = {
    uri: import.meta.env.VITE_API_GRAPHQL_URI,
  }

  if (options) {
    httpLinkOptions.headers = {
      ...httpLinkOptions.headers,
      ...buildHeader(options),
    }
  } else {
    const localStorageUser = getCurrentUserLocalStorage();
    if (localStorageUser) {
      httpLinkOptions.headers = {
        ...httpLinkOptions.headers,
        ...buildHeader({ currentUserId: localStorageUser.id, currentUserRole: localStorageUser.role }),
      }
    }
  }
  const httpLink = new HttpLink(httpLinkOptions);

  const wsLink = new GraphQLWsLink(createClient({
    url: import.meta.env.VITE_API_GRAPHQL__WS_URI,
  }));

  const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
    wsLink,
    httpLink,
  );

  return splitLink;
}

function buildHeader(options: BuildApolloLinkOptions) {
  const header: Record<string, string> = {};
  if (options.currentUserId) {
    header["Id"] = options.currentUserId.toString();
  }
  if (options.currentUserRole) {
    header["Role"] = options.currentUserRole;
  }

  return header;
}

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
  }),
  connectToDevTools: true,
  link: buildApolloLink(),
});