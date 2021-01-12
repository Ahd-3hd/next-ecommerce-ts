import Head from "next/head";
import NewHeader from "../components/NewHeader";
import ProductsShowcase from "../components/ProductsShowcase";
import CollectionSection from "../components/CollectionSection";
import Brands from "../components/Brands";
import BlogSection from "../components/BlogSection";
import dummyProducts from "../dummy/dummyProducts.json";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NewHeader />
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
