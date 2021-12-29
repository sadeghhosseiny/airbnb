import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Header from "../components/header/header";
import { wrapper } from "../store";
import {
  exploreDataRequesting,
  liveAnywhereDataRequesting,
} from "../store/actions";
import { END } from "redux-saga";
import BodyOfContents from "../components/bodyOfContents/bodyOfContents";
import Footer from "../components/footer/footer";
import MobileNav from "../components/mobileNav/mobileNav";
import GifBanner from "../components/gifBanner/gifBanner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeHolder="" searchPage={false} />
      <Banner />
      <GifBanner />
      <BodyOfContents />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store): any =>
    async ({ req, res }) => {
      await store?.dispatch(exploreDataRequesting(req));
      await store?.dispatch(liveAnywhereDataRequesting(req));
      store?.dispatch(END);
      await store?.sagaTask?.toPromise();
    },
);
