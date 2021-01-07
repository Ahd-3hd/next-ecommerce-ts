import {
  Wrapper,
  Column,
  Collection,
  CollectionTag,
  CollectionSpan,
  CollectionCard,
  CollectionCardTitle,
  CollectionCardLink,
  ColumnBottomContainer,
  NewsletterContainer,
  ColumnBottomWrapper,
  ColumnBottomContainerText,
  SalesContainer,
  SneakersContainer,
  SalesText,
} from "./index.style";
import Link from "next/link";
import ArrowRightIcon from "../../svg/ArrowRightIcon.svg";

const Header = () => {
  return (
    <Wrapper>
      <Column>
        <Link href="/collection" passHref>
          <Collection>
            <CollectionTag>
              <CollectionSpan>save</CollectionSpan>
              <CollectionSpan big>30%</CollectionSpan>
            </CollectionTag>
            <CollectionCard>
              <CollectionCardTitle>
                New 2021 Summer <br />
                collection
              </CollectionCardTitle>
              <CollectionCardLink>
                Shop Now <ArrowRightIcon />
              </CollectionCardLink>
            </CollectionCard>
          </Collection>
        </Link>
        <ColumnBottomWrapper>
          <NewsletterContainer></NewsletterContainer>
          <Link href="/watches" passHref>
            <ColumnBottomContainer>
              <ColumnBottomContainerText big>
                Watch Collection
              </ColumnBottomContainerText>
              <ColumnBottomContainerText>
                Shop Now <ArrowRightIcon />
              </ColumnBottomContainerText>
            </ColumnBottomContainer>
          </Link>
        </ColumnBottomWrapper>
      </Column>
      <Column>
        <Link href="/sales" passHref>
          <SalesContainer>
            <SalesText>ENJOY AN EXTRA</SalesText>
            <SalesText big>50% OFF</SalesText>
            <SalesText>Summer Styles</SalesText>
          </SalesContainer>
        </Link>
        <Link href="/sneakers" passHref>
          <SneakersContainer>
            <SalesText big>Men's Sneakers</SalesText>
            <SalesText>
              Shop Now <ArrowRightIcon />
            </SalesText>
          </SneakersContainer>
        </Link>
      </Column>
    </Wrapper>
  );
};

export default Header;
