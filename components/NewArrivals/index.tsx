import Link from "next/link";
import { Wrapper, Title, Container, DiscoverLink } from "./index.style";
import ProductCard from "../ProductCard";

const productsDummy = [
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "dress one",
    price: "250",
    rating: 5,
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 4,
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "shoes one",
    price: "650",
    rating: 2,
  },
  {
    id: 5,
    img:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 1,
  },
  {
    id: 6,
    img:
      "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 0,
  },
  {
    id: 7,
    img:
      "https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 4,
  },
  {
    id: 8,
    img:
      "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
  },
  {
    id: 9,
    img:
      "https://images.unsplash.com/photo-1507831041068-539748fc3c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
  },
  {
    id: 10,
    img:
      "https://images.unsplash.com/photo-1517232757230-5daf906e5fad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 2,
  },
];

const NewArrivals = () => {
  return (
    <Wrapper>
      <Title>New Arrivals</Title>
      <Container>
        {productsDummy.map((item) => (
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
