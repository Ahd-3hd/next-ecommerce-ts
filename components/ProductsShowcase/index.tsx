import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Wrapper, Title, Container, DiscoverLink } from "./index.style";
import ProductCard from "../ProductCard";

const ProductsShowcase = ({ products, title }) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => setIsVisible(entry.isIntersecting));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.4,
    });
    if (wrapperRef && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
  }, []);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container ref={wrapperRef} isVisible={isVisible}>
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
