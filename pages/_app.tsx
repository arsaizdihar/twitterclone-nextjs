import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "../node_modules/cropperjs/dist/cropper.css";
import Head from "../src/components/main-ui/Head";
import apolloClient from "../src/core/apollo";
import store from "../src/redux/store";
import { getInitialTheme } from "../src/utils/getInitialTheme";
import { toggleTheme } from "../src/utils/toggleTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dark = getInitialTheme() === "dark";
    toggleTheme(dark);
  });
  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <Head />
        <Component {...pageProps} />
      </ReduxProvider>
    </ApolloProvider>
  );
}
export default MyApp;
