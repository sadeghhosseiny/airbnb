import { AppProps } from "next/app";
import { NextPage } from "next";
import { wrapper } from "../store";
import "../styles/globals.css";
import MobileNav from "../components/mobileNav/mobileNav";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  color: "#FE595E",
  size: 4,
  className: "z-50",
  delay: 150,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-gray-100">
      <MobileNav />
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(MyApp);
