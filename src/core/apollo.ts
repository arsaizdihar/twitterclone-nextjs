import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const link = createUploadLink({
  // uri: "https://twitter.arsaizdihar.me/graphql/",
  uri: "http://localhost:8000/graphql/",
  credentials: "include",
});

apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: link as any,
});

export default apolloClient;
