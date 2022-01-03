import { AppProps } from "next/app";
import { NextPage } from "next";
import { wrapper } from "../store";
import "../styles/globals.css";
import MobileNav from "../components/mobileNav/mobileNav";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-slate-800 transition duration-300">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen flex-col">
          <img
            className=""
            src="https://media.giphy.com/media/5YbQYuAnMfNkUU6GpT/giphy.gif"
          />
        </div>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </div>
  );
};

export default wrapper.withRedux(MyApp);
