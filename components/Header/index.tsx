import {
  Wrapper,
  FirstRow,
  SecondRow,
  Collection,
  Sales,
  CollectionTag,
  TagSpan,
  CollectionCard,
  CollectionCardTitle,
  CollectionCardLink,
  CollectionCardLinkSpan,
  SalesText,
} from "./index.style";
import Link from "next/link";
import ArrowRightIcon from "../../svg/ArrowRightIcon.svg";

const Header = () => {
  return (
    <Wrapper>
      <FirstRow>
        <Link href="/collection" passHref>
          <Collection>
            <CollectionTag>
              <TagSpan>Save</TagSpan>
              <TagSpan big>30%</TagSpan>
            </CollectionTag>
            <CollectionCard>
              <CollectionCardTitle>
                New 2021 Summer
                <br /> Collection
              </CollectionCardTitle>
              <CollectionCardLink>
                <CollectionCardLinkSpan>Shop Now</CollectionCardLinkSpan>
                <ArrowRightIcon />
              </CollectionCardLink>
            </CollectionCard>
          </Collection>
        </Link>
        <Link href="/sales" passHref>
          <Sales>
            <SalesText fontSize="1.1rem">ENJOY AN EXTRA</SalesText>
            <SalesText fontSize="4rem">50% OFF</SalesText>
            <SalesText fontSize="1.2rem">Summer Styles</SalesText>
          </Sales>
        </Link>
      </FirstRow>
      <SecondRow></SecondRow>
    </Wrapper>
  );
};

export default Header;
