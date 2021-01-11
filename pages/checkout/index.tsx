import Head from "next/head";
import { useState, useRef } from "react";
import {
  Wrapper,
  Container,
  Title,
  Column,
  BillingForm,
  OrderSummary,
  FormRow,
  FormTitle,
  InputGroup,
  InputField,
  InputLabel,
  OrderSummerTitle,
  ProductSummary,
  ProductImg,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  PriceBreakdown,
  PriceRow,
  PriceKey,
  PriceValue,
  NoticeParagraph,
  PlaceOrderButton,
} from "../../styles/Checkout.style";
import dummyProducts from "../../dummy/dummyProducts.json";

const Checkout = ({ products }) => {
  const [items, setItems] = useState(products);
  const formButtonRef = useRef(null);

  const calculateSubTotal = () => {
    const total = items.reduce((acc, item) => {
      return (acc += parseInt(item.price) * item.quantity);
    }, 0);

    return total;
  };
  const afterTaxAndShipping = () => {
    return calculateSubTotal() + 15 + 8;
  };
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Wrapper>
        <Title>Checkout</Title>
        <Container>
          <Column>
            <BillingForm>
              <FormRow>
                <FormTitle>Billing Details</FormTitle>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>First Name</InputLabel>
                  <InputField type="text" required placeholder="First Name" />
                </InputGroup>
                <InputGroup>
                  <InputLabel>Last Name</InputLabel>
                  <InputField type="text" required placeholder="Last Name" />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Email Address</InputLabel>
                  <InputField
                    type="email"
                    required
                    placeholder="Email Address"
                  />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Company Name</InputLabel>
                  <InputField type="text" required placeholder="Company Name" />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Country</InputLabel>
                  <InputField type="text" required placeholder="Country" />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Adress Line 1</InputLabel>
                  <InputField
                    type="text"
                    required
                    placeholder="Address Line 1"
                  />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Adress Line 2</InputLabel>
                  <InputField
                    type="text"
                    required
                    placeholder="Address Line 2"
                  />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Town / City</InputLabel>
                  <InputField type="text" required placeholder="Town / City" />
                </InputGroup>
                <InputGroup>
                  <InputLabel>Zip / Postcode</InputLabel>
                  <InputField
                    type="text"
                    required
                    placeholder="Zip / Postcode"
                  />
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup>
                  <InputLabel>Mobile Phone</InputLabel>
                  <InputField type="text" required placeholder="Mobile Phone" />
                </InputGroup>
              </FormRow>
              <button type="submit" ref={formButtonRef}>
                inside
              </button>
            </BillingForm>
          </Column>
          <Column>
            <OrderSummary>
              <OrderSummerTitle>Order Summary</OrderSummerTitle>
              {products.map((item) => (
                <ProductSummary key={item.id}>
                  <ProductImg img={item.img} />
                  <ProductDetails>
                    <ProductTitle>
                      {item.title} - x{item.quantity}
                    </ProductTitle>
                    <ProductPrice>${item.price}</ProductPrice>
                  </ProductDetails>
                </ProductSummary>
              ))}
            </OrderSummary>
            <PriceBreakdown>
              <PriceRow>
                <PriceKey>Subtotal</PriceKey>
                <PriceValue>${calculateSubTotal()}</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceKey>Tax</PriceKey>
                <PriceValue>$15.00</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceKey>Shipping</PriceKey>
                <PriceValue>$8.00</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceKey>Total</PriceKey>
                <PriceValue>${afterTaxAndShipping()}</PriceValue>
              </PriceRow>
            </PriceBreakdown>
            <NoticeParagraph>
              Your Personal are not proccessed because this is a preview website
              and not a real store.
            </NoticeParagraph>
            <PlaceOrderButton onClick={() => formButtonRef?.current?.click()}>
              Place Order
            </PlaceOrderButton>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Checkout;

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
