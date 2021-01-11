import { useState } from "react";
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
  NoResults,
  CollectionContainer,
  CollectionImg,
  CollectionDetails,
  CollectionText,
  CollectionLink,
  BackgroundWord,
} from "../../styles/Shop.style";
import ProductCard from "../../components/ProductCard";
import dummyProducts from "../../dummy/dummyProducts.json";

const collectionImgUrl =
  "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const catDum = [
  {
    id: 0,
    title: "gender",
    options: ["all", "women", "men", "unisex"],
  },
  {
    id: 1,
    title: "category",
    options: ["all", "shirts", "dresses", "trousers", "shoes", "accessories"],
  },
  {
    id: 2,
    title: "season",
    options: ["all", "summer", "winter", "spring", "fall"],
  },
  {
    id: 3,
    title: "size",
    options: ["all", "sm", "md", "lg", "xl"],
  },
  {
    id: 4,
    title: "brand",
    options: ["all", "one", "two", "three", "four"],
  },
  {
    id: 5,
    title: "price",
    options: ["all", "< $500", "< $1000", "< $2000", "< $3000"],
  },
];
export default function Shop({ products }) {
  const [searchParams, setSearchParams] = useState({
    keyword: "all",
    gender: "all",
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
      keyword: "all",
      gender: "all",
      category: "all",
      season: "all",
      size: "all",
      brand: "all",
      price: "all",
    });
    router.push("/shop");
  };

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
          <CollectionContainer>
            <CollectionImg img={collectionImgUrl} />
            <CollectionDetails>
              <CollectionText>
                2021 Summer
                <br />
                Collection
              </CollectionText>
              <Link href="/shop/collection" passHref>
                <CollectionLink>View Collection</CollectionLink>
              </Link>
            </CollectionDetails>
            <BackgroundWord>New Summer</BackgroundWord>
          </CollectionContainer>
          {products.length === 0 ? (
            <NoResults>No results.. try changing filters </NoResults>
          ) : (
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
          )}
        </ProductsSection>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const products = filterData(dummyProducts, context.query);
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
    if (query.gender !== "all") {
      output = output.filter((item) => item.gender === query.gender);
    }

    if (query.price !== "all") {
      const priceArray = query.price.split("$");
      const priceNum = parseInt(priceArray[priceArray.length - 1]);
      output = output.filter((item) => parseInt(item.price) <= priceNum);
    }
    if (query.keyword !== "all") {
      output = output.filter((item) =>
        item.title.split(" ").includes(query.keyword)
      );
    }
  }
  return output;
};
