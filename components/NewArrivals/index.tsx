import Link from "next/link";
import { Wrapper, Title, Container, DiscoverLink } from "./index.style";
import ProductCard from "../ProductCard";

const NewArrivals = ({ products }) => {
  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Container>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Container>
      <Link href="/shop" passHref>
        <DiscoverLink>Discover More</DiscoverLink>
      </Link>
    </Wrapper>
  );
};

export default NewArrivals;
