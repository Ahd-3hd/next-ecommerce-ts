import { useState } from "react";
import Head from "next/head";
import {
  Wrapper,
  Container,
  Column,
  Title,
  ProductCard,
  ProductImg,
  Details,
  PriceRemove,
  DetailsTitle,
  ProductMeta,
  ProductMetaText,
  Quantity,
  QuantityOption,
  PriceText,
  RemoveButton,
} from "../../styles/Cart.style";
import dummyProducts from "../../dummy/dummyProducts.json";

const Cart = ({ products }) => {
  const [items, setItems] = useState(products);

  const handleRemove = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Container>
          <Column>
            {items.map((item) => (
              <ProductCard key={item.id}>
                <ProductImg img={item.img} />
                <Details>
                  <DetailsTitle>{item.title}</DetailsTitle>
                  <ProductMeta>
                    <ProductMetaText>Size: {item.size}</ProductMetaText>
                    <ProductMetaText>Brand: {item.brand}</ProductMetaText>
                  </ProductMeta>
                  <Quantity>
                    <QuantityOption>1</QuantityOption>
                    <QuantityOption>2</QuantityOption>
                    <QuantityOption>3</QuantityOption>
                    <QuantityOption>4</QuantityOption>
                    <QuantityOption>5</QuantityOption>
                    <QuantityOption>6</QuantityOption>
                    <QuantityOption>7</QuantityOption>
                    <QuantityOption>8</QuantityOption>
                  </Quantity>
                </Details>
                <PriceRemove>
                  <PriceText>${item.price}</PriceText>
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    X Remove
                  </RemoveButton>
                </PriceRemove>
              </ProductCard>
            ))}
          </Column>
          <Column></Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Cart;

export async function getServerSideProps(context) {
  const products = dummyProducts.filter((item, i) => i < 4);
  return {
    props: {
      products,
    },
  };
}
