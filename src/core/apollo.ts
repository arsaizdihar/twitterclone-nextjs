import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const link = createHttpLink({
  uri: "https://twitterapi.arsaiz.xyz/graphql/",
  // uri: "http://localhost:8000/graphql/",
  credentials: "include",
});

apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link,
});

export default apolloClient;
