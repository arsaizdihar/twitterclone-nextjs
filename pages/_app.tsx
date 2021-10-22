import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "../src/components/main-ui/Head";
import store from "../src/redux/store";
import "../styles/globals.css";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dark = getInitialTheme() === "dark";
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("color-theme", "dark");
    } else if (dark === false) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("color-theme", "light");
    }
  });
  return (
    <ReduxProvider store={store}>
      <Head />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
export default MyApp;
