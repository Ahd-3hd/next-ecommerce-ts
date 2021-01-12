import Head from "next/head";
import ProductsShowcase from "../components/ProductsShowcase";
import CollectionSection from "../components/CollectionSection";
import Brands from "../components/Brands";
import BlogSection from "../components/BlogSection";
import dummyProducts from "../dummy/dummyProducts.json";
import HeaderThree from "../components/HeaderThree";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeaderThree />
      <ProductsShowcase products={products} title="New Arrivals" />
      <CollectionSection />
      <Brands />
      <BlogSection />
    </>
  );
}

export async function getServerSideProps(context) {
  const products = dummyProducts.filter((item, i) => i < 11);
  return {
    props: {
      products,
    },
  };
}
