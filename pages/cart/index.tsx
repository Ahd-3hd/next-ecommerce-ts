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
  PriceBreakdownContainer,
  PriceRow,
  PriceKey,
  PriceValue,
  CheckoutButton,
} from "../../styles/Cart.style";
import dummyProducts from "../../dummy/dummyProducts.json";
import { useRouter } from "next/router";

const Cart = ({ products }) => {
  const router = useRouter();
  const [items, setItems] = useState(products);

  const handleRemove = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  const calculateSubTotal = () => {
    const total = items.reduce((acc, item) => {
      return (acc += parseInt(item.price) * item.quantity);
    }, 0);

    return total;
  };

  const afterTax = () => {
    return calculateSubTotal() + 15;
  };

  const handleChangeQuantity = (e, id) => {
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          item.quantity = e.target.value;
        }
        return item;
      })
    );
  };

  const handleProceed = () => {
    router.push("/checkout");
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
                  <Quantity onChange={(e) => handleChangeQuantity(e, item.id)}>
                    <QuantityOption value="1">1</QuantityOption>
                    <QuantityOption value="2">2</QuantityOption>
                    <QuantityOption value="3">3</QuantityOption>
                    <QuantityOption value="4">4</QuantityOption>
                    <QuantityOption value="5">5</QuantityOption>
                    <QuantityOption value="6">6</QuantityOption>
                    <QuantityOption value="7">7</QuantityOption>
                    <QuantityOption value="8">8</QuantityOption>
                    <QuantityOption value="9">9</QuantityOption>
                    <QuantityOption value="10">10</QuantityOption>
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
          <Column>
            <PriceBreakdownContainer>
              <PriceRow>
                <PriceKey>Subtotal</PriceKey>
                <PriceValue>${calculateSubTotal()}</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceKey>Tax</PriceKey>
                <PriceValue>$15.00</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceKey>Total</PriceKey>
                <PriceValue>${afterTax()}</PriceValue>
              </PriceRow>
            </PriceBreakdownContainer>
            <CheckoutButton onClick={handleProceed}>
              Proceed to Checkout
            </CheckoutButton>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Cart;

export async function getServerSideProps(context) {
  const products = dummyProducts
    .filter((item, i) => i < 4)
    .map((item) => ({
      ...item,
      quantity: 1,
    }));
  return {
    props: {
      products,
    },
  };
}
