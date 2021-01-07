import Head from "next/head";
import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import CollectionSection from "../components/CollectionSection";
import Brands from "../components/Brands";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <NewArrivals />
      <CollectionSection />
      <Brands />
    </>
  );
}
