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
        <SalesContainer></SalesContainer>
        <SneakersContainer></SneakersContainer>
      </Column>
    </Wrapper>
  );
};

export default Header;
