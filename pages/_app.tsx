import { AppProps } from "next/app";
import { NextPage } from "next";
import { wrapper } from "../store";
import "../styles/globals.css";
import MobileNav from "../components/mobileNav/mobileNav";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-gray-100">
      <MobileNav />
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(MyApp);
