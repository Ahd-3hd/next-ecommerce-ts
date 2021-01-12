import {
  Wrapper,
  Background,
  Card,
  WhiteSection,
  ImageSection,
  Img,
  TitleContainer,
  Title,
  ShopButton,
  SocialContainer,
  HorizontalLine,
  SocialLinksContainer,
  SocialLink,
} from "./index.style";
import Link from "next/link";
import FacebookIcon from "../../svg/FacebookIcon.svg";
import InstagramIcon from "../../svg/InstagramIcon.svg";
import MediumIcon from "../../svg/MediumIcon.svg";
import TwitterIcon from "../../svg/TwitterIcon.svg";

const HeaderThree = () => {
  return (
    <Wrapper>
      <Background />
      <Card>
        <WhiteSection>
          <TitleContainer>
            <Title>
              Black & <span>Rose</span> <br /> Collection
            </Title>
          </TitleContainer>
          <Link href="/shop" passHref>
            <ShopButton>START SHOPPING</ShopButton>
          </Link>
        </WhiteSection>
        <ImageSection>
          <Img src="/imgs/header3.png" />
        </ImageSection>
        <SocialContainer>
          <HorizontalLine />
          <SocialLinksContainer>
            <Link href="/" passHref>
              <SocialLink>
                <FacebookIcon />
              </SocialLink>
            </Link>
            <Link href="/" passHref>
              <SocialLink>
                <TwitterIcon />
              </SocialLink>
            </Link>
            <Link href="/" passHref>
              <SocialLink>
                <InstagramIcon />
              </SocialLink>
            </Link>
            <Link href="/" passHref>
              <SocialLink>
                <MediumIcon />
              </SocialLink>
            </Link>
          </SocialLinksContainer>
        </SocialContainer>
      </Card>
    </Wrapper>
  );
};

export default HeaderThree;
