import Head from "next/head";
import ProductsShowcase from "../../components/ProductsShowcase";
import dummyContent from "../../dummy/dummyProducts.json";
import { Wrapper } from "../../styles/Categories.style";

const Categories = ({ data }) => {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <Wrapper>
        <ProductsShowcase products={data} title="Dresses" />
        <ProductsShowcase products={data} title="Shirts" />
        <ProductsShowcase products={data} title="Trousers" />
        <ProductsShowcase products={data} title="Shoes" />
        <ProductsShowcase products={data} title="Accessories" />
      </Wrapper>
    </>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const data = dummyContent;
  return {
    props: {
      data,
    },
  };
}
