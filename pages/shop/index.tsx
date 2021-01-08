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
    title: "Category",
    options: ["All", "Women", "Men"],
  },
  {
    id: 1,
    title: "Season",
    options: ["All", "Summer", "Winter", "Spring", "Fall"],
  },
  {
    id: 2,
    title: "Size",
    options: ["All", "sm", "md", "lg", "xl"],
  },
  {
    id: 3,
    title: "Brand",
    options: ["All", "One", "Two", "Three", "Four"],
  },
  {
    id: 4,
    title: "Price",
    options: ["All", "< $500", "< $1000", "< $2000", "< $3000"],
  },
];

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Wrapper>
        <FilterSection>
          {catDum.map((item) => (
            <Dropdown key={item.id} title={item.title} options={item.options} />
          ))}
          <FilterButton>Filter</FilterButton>
        </FilterSection>
        <ProductsSection></ProductsSection>
      </Wrapper>
    </>
  );
}
