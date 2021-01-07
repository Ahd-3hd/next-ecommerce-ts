import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <NewArrivals />
    </>
  );
}
