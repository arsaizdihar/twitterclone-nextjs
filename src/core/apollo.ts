import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { fromPromise } from "apollo-link";
import { onError } from "apollo-link-error";
import { RefreshTokenDocument } from "../generated/graphql";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const link = createHttpLink({
  uri: "http://localhost:8000/graphql/",
  credentials: "include",
});

const getNewToken = () =>
  apolloClient.mutate({ mutation: RefreshTokenDocument });
let refreshInvalid = false;
let isRefreshing = false;
let pendingRequests: Array<() => void> = [];

export const revalidateRefresh = () => {
  refreshInvalid = false;
};

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (refreshInvalid) return forward(operation);
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (
          err.message === "You do not have permission to perform this action"
        ) {
          let forward$;
          if (!isRefreshing) {
            forward$ = fromPromise(
              getNewToken()
                .then((value) => {
                  if (
                    value.data.errors?.nonFieldErrors[0]?.code ===
                    "invalid_token"
                  ) {
                    refreshInvalid = true;
                    pendingRequests = [];
                    return;
                  } else {
                    resolvePendingRequests();
                    return forward(operation);
                  }
                })
                .catch(() => {
                  pendingRequests = [];
                  return;
                })
                .finally(() => {
                  isRefreshing = false;
                })
            ).filter((value) => Boolean(value));
          } else {
            forward$ = fromPromise(
              new Promise<void>((resolve) => {
                pendingRequests.push(() => {
                  resolve();
                });
              })
            );
          }
          return forward$.flatMap(() => forward(operation));
        }
      }
    } else if (networkError) {
      console.log(networkError);
    }
  }
);

apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  // @ts-ignore
  link: ApolloLink.from([errorLink, link]),
});

export default apolloClient;
