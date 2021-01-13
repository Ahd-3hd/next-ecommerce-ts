import Head from "next/head";
import ProductsShowcase from "../components/ProductsShowcase";
import CollectionSection from "../components/CollectionSection";
import Brands from "../components/Brands";
import BlogSection from "../components/BlogSection";
import dummyProducts from "../dummy/dummyProducts.json";
import HeaderThree from "../components/HeaderThree";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ products, users }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>{users[0].username}</h1>
      <HeaderThree />
      <ProductsShowcase products={products} title="New Arrivals" />
      <CollectionSection />
      <Brands />
      <BlogSection />
    </>
  );
}

export async function getServerSideProps(context) {
  const users = await prisma.user.findMany();
  console.log(users);
  const products = dummyProducts.filter((item, i) => i < 11);
  return {
    props: {
      products,
      users,
    },
  };
}
