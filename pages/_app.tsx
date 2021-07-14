import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { Provider as ReduxProvider } from "react-redux";
import Head from "../src/components/main-ui/Head";
import store from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Head />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
export default MyApp;
