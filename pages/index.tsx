import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Header from "../components/header/header";
import { wrapper } from "../store";
import { exploreDataRequesting } from "../store/actions";
import { END } from "redux-saga";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store): any =>
    async ({ req, res }) => {
      await store?.dispatch(exploreDataRequesting(req));
      store?.dispatch(END);
      await store?.sagaTask?.toPromise();
    },
);
