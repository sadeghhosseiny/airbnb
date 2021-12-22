import Head from "next/head";
import Banner from "../components/banner/banner";
import Header from "../components/header/header";

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
