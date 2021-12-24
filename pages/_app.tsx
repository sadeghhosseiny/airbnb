import { AppProps } from "next/app";
import { NextPage } from "next";
import { wrapper } from "../store";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
