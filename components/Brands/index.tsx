import Link from "next/link";
import {
  Wrapper,
  Title,
  Subtitle,
  Container,
  BrandContainer,
  BrandImg,
  DiscountParagraph,
  DiscountSpan,
} from "./index.style";

const brands = [
  {
    id: 1,
    logo: "/imgs/logo1.svg",
    discount: "30%",
  },
  {
    id: 2,
    logo: "/imgs/logo2.svg",
    discount: "20%",
  },
  {
    id: 3,
    logo: "/imgs/logo3.svg",
    discount: "10%",
  },
  {
    id: 4,
    logo: "/imgs/logo4.svg",
    discount: "50%",
  },
];

const Brands = () => {
  return (
    <Wrapper>
      <Subtitle>TOP DESIGNERS</Subtitle>
      <Title>Featured Brands</Title>
      <Container>
        {brands.map((item) => (
          <Link href={`/shop/${item.id}`} passHref key={item.id}>
            <BrandContainer>
              <BrandImg src={item.logo} alt={item.id.toString()} />
              <DiscountParagraph>
                Up to <DiscountSpan>{item.discount} OFF</DiscountSpan> Discount
              </DiscountParagraph>
            </BrandContainer>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Brands;
