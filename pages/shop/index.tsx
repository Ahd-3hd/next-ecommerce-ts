import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {
  Wrapper,
  FilterSection,
  ProductsSection,
  Dropdown,
  FilterButton,
  ResetSearchButton,
  ProductsContainer,
} from "../../styles/Shop.style";
import ProductCard from "../../components/ProductCard";

const catDum = [
  {
    id: 0,
    title: "category",
    options: ["all", "women", "men"],
  },
  {
    id: 1,
    title: "season",
    options: ["all", "summer", "winter", "spring", "fall"],
  },
  {
    id: 2,
    title: "size",
    options: ["all", "sm", "md", "lg", "xl"],
  },
  {
    id: 3,
    title: "brand",
    options: ["all", "one", "two", "three", "four"],
  },
  {
    id: 4,
    title: "price",
    options: ["all", "< $500", "< $1000", "< $2000", "< $3000"],
  },
];
export default function Shop({ products }) {
  const [searchParams, setSearchParams] = useState({
    category: "all",
    season: "all",
    size: "all",
    brand: "all",
    price: "all",
  });
  const router = useRouter();
  const handleFilter = () => {
    router.push({
      pathname: "/shop",
      query: searchParams,
    });
  };

  const handleResetSearch = () => {
    setSearchParams({
      category: "all",
      season: "all",
      size: "all",
      brand: "all",
      price: "all",
    });
    router.push("/shop");
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Wrapper>
        <FilterSection>
          {catDum.map((entry) => (
            <Dropdown
              key={entry.id}
              title={entry.title}
              options={entry.options}
              setParams={setSearchParams}
              checked={searchParams[entry.title]}
              reset={handleResetSearch}
            />
          ))}
          <FilterButton onClick={handleFilter}>Filter</FilterButton>
          <ResetSearchButton onClick={handleResetSearch}>
            Reset Search
          </ResetSearchButton>
        </FilterSection>
        <ProductsSection>
          <ProductsContainer>
            {products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </ProductsContainer>
        </ProductsSection>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const products = filterData(data, context.query);
  return {
    props: {
      products,
    },
  };
}

const filterData = (data, params) => {
  let output = data;
  const query = params;

  if (Object.keys(query).length > 0) {
    if (query.category !== "all") {
      output = output.filter((item) => item.category === query.category);
    }

    if (query.season !== "all") {
      output = output.filter((item) => item.season === query.season);
    }

    if (query.size !== "all") {
      output = output.filter((item) => item.size === query.size);
    }

    if (query.brand !== "all") {
      output = output.filter((item) => item.brand === query.brand);
    }

    if (query.price !== "all") {
      const priceArray = query.price.split("$");
      const priceNum = parseInt(priceArray[priceArray.length - 1]);
      output = output.filter((item) => parseInt(item.price) <= priceNum);
    }
  }
  return output;
};

/// Dummy Data

const data = [
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "dress one",
    price: "250",
    rating: 5,
    category: "men",
    season: "summer",
    size: "md",
    brand: "one",
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 4,
    category: "men",
    season: "summer",
    size: "sm",
    brand: "one",
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
    category: "men",
    season: "spring",
    size: "lg",
    brand: "two",
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "shoes one",
    price: "650",
    rating: 2,
    category: "men",
    season: "spring",
    size: "xl",
    brand: "two",
  },
  {
    id: 5,
    img:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 1,
    category: "men",
    season: "fall",
    size: "md",
    brand: "three",
  },
  {
    id: 6,
    img:
      "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 0,
    category: "women",
    season: "fall",
    size: "lg",
    brand: "three",
  },
  {
    id: 7,
    img:
      "https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 4,
    category: "women",
    season: "winter",
    size: "sm",
    brand: "four",
  },
  {
    id: 8,
    img:
      "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
    category: "women",
    season: "winter",
    size: "xl",
    brand: "four",
  },
  {
    id: 9,
    img:
      "https://images.unsplash.com/photo-1507831041068-539748fc3c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80",
    title: "shoes one",
    price: "650",
    rating: 3,
    category: "women",
    season: "fall",
    size: "md",
    brand: "one",
  },
  {
    id: 10,
    img:
      "https://images.unsplash.com/photo-1517232757230-5daf906e5fad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80",
    title: "shoes one",
    price: "650",
    rating: 2,
    category: "women",
    season: "summer",
    size: "lg",
    brand: "two",
  },
];
