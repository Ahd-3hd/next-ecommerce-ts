import Link from "next/link";
import { Wrapper, Title, Container, DiscoverLink } from "./index.style";
import ProductCard from "../ProductCard";

const ProductsShowcase = ({ products, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
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

export default ProductsShowcase;
