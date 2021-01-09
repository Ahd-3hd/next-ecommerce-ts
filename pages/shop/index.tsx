import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import {
  Wrapper,
  FilterSection,
  ProductsSection,
  Dropdown,
  FilterButton,
} from "../../styles/Shop.style";

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
export default function Shop() {
  const [searchParams, setSearchParams] = useState({
    category: "all",
    season: "all",
    size: "all",
    brand: "all",
    price: "all",
  });
  const router = useRouter();
  const handleFilter = () => {
    console.log(searchParams);
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
            />
          ))}
          <FilterButton onClick={handleFilter}>Filter</FilterButton>
        </FilterSection>
        <ProductsSection></ProductsSection>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {}, // will be passed to the page component as props
  };
}
