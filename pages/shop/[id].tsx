import Head from "next/head";
import {
  Wrapper,
  Carousel,
  BigImg,
  ThumbnailContainer,
  Thumbnail,
} from "../../styles/ProductPage.style";
import dummyProducts from "../../dummy/dummyProducts.json";
import { useState } from "react";

const ProductPage = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Wrapper>
        <Carousel>
          <BigImg img={product.media[activeIndex]} />
          <ThumbnailContainer>
            {product.media.map((entry, index) => (
              <Thumbnail
                img={entry}
                key={entry}
                onClick={() => setActiveIndex(index)}
                isActive={activeIndex === index}
              />
            ))}
          </ThumbnailContainer>
        </Carousel>
      </Wrapper>
    </>
  );
};

export default ProductPage;
export async function getServerSideProps(context) {
  const product = dummyProducts[context.query.id];
  return {
    props: {
      product,
    },
  };
}
