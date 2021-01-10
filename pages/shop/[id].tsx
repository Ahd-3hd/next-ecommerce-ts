import Head from "next/head";
import { useState } from "react";

import {
  Wrapper,
  Carousel,
  BigImg,
  ThumbnailContainer,
  Thumbnail,
  Container,
  ProductDetails,
  ProductCategoryReviewContainer,
  CategorySpan,
  Ratings,
  Star,
  ProductTitle,
  ProductPrice,
  CartContainer,
  Quantity,
  AddToCart,
  AddToFavorite,
  QuantityOption,
  SizeContainer,
  SizeLabel,
  SizeButton,
  ExtraContainer,
  TabsContainer,
  Tab,
  TabContent,
  DescriptionTabContent,
  ReviewsTabContent,
  DescriptionParagraph,
  Bulletpoints,
  Bullet,
  BulletSpan,
  Review,
} from "../../styles/ProductPage.style";
import dummyProducts from "../../dummy/dummyProducts.json";
import StarIcon from "../../svg/StarIcon.svg";
import CartIcon from "../../svg/CartIcon.svg";
import FavoriteIcon from "../../svg/FavoriteIcon.svg";
const ProductPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("sm");
  const [activeTab, setActiveTab] = useState("Reviews");
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Wrapper>
        <Container>
          <Carousel>
            <BigImg img={product.media[activeIndex]} />
            <ThumbnailContainer>
              {product.media.map((entry, index) => (
                <Thumbnail
                  img={entry}
                  key={entry}
                  onClick={() => setActiveIndex(index)}
                  isActive={activeIndex === index}
                />
              ))}
            </ThumbnailContainer>
          </Carousel>
          <ProductDetails>
            <ProductCategoryReviewContainer>
              <CategorySpan>{product.category}</CategorySpan>
              <Ratings>
                {[...Array(5)].map((value: undefined, index: number) => (
                  <Star key={index} active={index < product.rating}>
                    <StarIcon />
                  </Star>
                ))}
              </Ratings>
            </ProductCategoryReviewContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <SizeContainer>
              <SizeLabel>Size:</SizeLabel>
              <SizeButton
                selected={selectedSize === "sm"}
                onClick={() => setSelectedSize("sm")}
              >
                sm
              </SizeButton>
              <SizeButton
                selected={selectedSize === "md"}
                onClick={() => setSelectedSize("md")}
              >
                md
              </SizeButton>
              <SizeButton
                selected={selectedSize === "lg"}
                onClick={() => setSelectedSize("lg")}
              >
                lg
              </SizeButton>
              <SizeButton
                selected={selectedSize === "xl"}
                onClick={() => setSelectedSize("xl")}
              >
                xl
              </SizeButton>
            </SizeContainer>
            <CartContainer>
              <Quantity>
                <QuantityOption value="1">1</QuantityOption>
                <QuantityOption value="2">2</QuantityOption>
                <QuantityOption value="3">3</QuantityOption>
                <QuantityOption value="4">4</QuantityOption>
                <QuantityOption value="5">5</QuantityOption>
                <QuantityOption value="6">6</QuantityOption>
                <QuantityOption value="7">7</QuantityOption>
                <QuantityOption value="8">8</QuantityOption>
                <QuantityOption value="9">9</QuantityOption>
                <QuantityOption value="10">10</QuantityOption>
              </Quantity>
              <AddToCart>
                <CartIcon />
                Add to Cart
              </AddToCart>
              <AddToFavorite>
                <FavoriteIcon />
                Favorite
              </AddToFavorite>
            </CartContainer>
          </ProductDetails>
        </Container>
        <ExtraContainer>
          <TabsContainer>
            <Tab
              isActive={activeTab === "Description"}
              onClick={() => setActiveTab("Description")}
            >
              Description
            </Tab>
            <Tab
              isActive={activeTab === "Reviews"}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </Tab>
          </TabsContainer>
          <TabContent>
            {activeTab === "Description" ? (
              <DescriptionTabContent>
                <DescriptionParagraph>
                  {product.description.text}
                </DescriptionParagraph>
                <Bulletpoints>
                  {product.description.bulletpoints.map((bull) => (
                    <Bullet key={bull.id}>
                      <BulletSpan bold>{bull.title}:</BulletSpan>
                      <BulletSpan>{bull.value}</BulletSpan>
                    </Bullet>
                  ))}
                </Bulletpoints>
              </DescriptionTabContent>
            ) : (
              <ReviewsTabContent>
                {product.reviews.map((item) => (
                  <Review
                    key={item.id}
                    text={item.text}
                    username={item.username}
                    avatar={item.avatar}
                    rating={item.rating}
                  />
                ))}
              </ReviewsTabContent>
            )}
          </TabContent>
        </ExtraContainer>
      </Wrapper>
    </>
  );
};

export default ProductPage;
export async function getServerSideProps(context) {
  const product = dummyProducts[context.query.id];
  return {
    props: {
      product,
    },
  };
}
