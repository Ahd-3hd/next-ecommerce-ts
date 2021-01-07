import Link from "next/link";
import {
  Wrapper,
  Container,
  Card,
  CardTitle,
  CardParagraph,
  CardLink,
} from "./index.style";
import ArrowRightIcon from "../../svg/ArrowRightIcon.svg";

const img1 =
  "https://images.unsplash.com/photo-1572295182214-b95a30891748?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80";
const img2 =
  "https://images.unsplash.com/photo-1572172793409-c3db4a0ca8df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80";

const CollectionSection = () => {
  return (
    <Wrapper>
      <Container img={img1}></Container>
      <Container img={img2}></Container>
      <Card>
        <CardTitle>Winter Collection</CardTitle>
        <CardParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardParagraph>
        <Link href="/shop" passHref>
          <CardLink>
            Shop Now <ArrowRightIcon />
          </CardLink>
        </Link>
      </Card>
    </Wrapper>
  );
};

export default CollectionSection;
