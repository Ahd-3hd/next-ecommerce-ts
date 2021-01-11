import Link from "next/link";
import FacebookIcon from "../../svg/FacebookIcon.svg";
import InstagramIcon from "../../svg/InstagramIcon.svg";
import MediumIcon from "../../svg/MediumIcon.svg";
import TwitterIcon from "../../svg/TwitterIcon.svg";
import YoutubeIcon from "../../svg/YoutubeIcon.svg";
import FooterBlobOne from "../../svg/FooterBlobOne.svg";
import {
  Wrapper,
  DeliverySection,
  DeliveryContainer,
  DeliveryDetails,
  DeliveryText,
  DeliveryIcon,
  BottomFooter,
  FooterTitle,
  FooterLinksMenu,
  FooterLinksMenuItem,
  FooterLink,
  SocialLinksContainer,
  SocialLink,
  BlobContainer,
  Copyrights,
} from "./index.style";

const DeliveryFeatures = [
  {
    id: 0,
    icon: "/imgs/truckIcon.svg",
    title: "FREE SHIPPING",
    description: "From all orders over $100",
  },
  {
    id: 1,
    icon: "/imgs/returnIcon.svg",
    title: "FREE RETURNS",
    description: "Return money within 30 days",
  },
  {
    id: 2,
    icon: "/imgs/tagIcon.svg",
    title: "Quality Brands",
    description: "We have everything you need",
  },
];
const Footer = () => {
  return (
    <Wrapper>
      <DeliverySection>
        {DeliveryFeatures.map((item) => (
          <DeliveryContainer key={item.id}>
            <DeliveryIcon src={item.icon} alt={item.title} />
            <DeliveryDetails>
              <DeliveryText big>{item.title}</DeliveryText>
              <DeliveryText>{item.description}</DeliveryText>
            </DeliveryDetails>
          </DeliveryContainer>
        ))}
      </DeliverySection>
      <BottomFooter>
        <FooterTitle>Shopper.</FooterTitle>
        <FooterLinksMenu>
          <FooterLinksMenuItem>
            <Link href="/" passHref>
              <FooterLink>Home</FooterLink>
            </Link>
          </FooterLinksMenuItem>
          <FooterLinksMenuItem>
            <Link href="/shop" passHref>
              <FooterLink>Shop</FooterLink>
            </Link>
          </FooterLinksMenuItem>
          <FooterLinksMenuItem>
            <Link href="/blog" passHref>
              <FooterLink>Blog</FooterLink>
            </Link>
          </FooterLinksMenuItem>
          <FooterLinksMenuItem>
            <Link href="/faq" passHref>
              <FooterLink>F.A.Q</FooterLink>
            </Link>
          </FooterLinksMenuItem>
        </FooterLinksMenu>
        <SocialLinksContainer>
          <SocialLink href="https://www.facebook.com">
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="https://www.youtube.com">
            <YoutubeIcon />
          </SocialLink>
          <SocialLink href="https://www.twitter.com">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="https://www.instagram.com">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://www.medium.com">
            <MediumIcon />
          </SocialLink>
        </SocialLinksContainer>
        <BlobContainer>
          <FooterBlobOne />
        </BlobContainer>
        <BlobContainer reverse>
          <FooterBlobOne />
        </BlobContainer>
        <Copyrights>
          Coded By <a href="https://github.com/Zeus3hd">Ahd Hani</a>{" "}
          {new Date().getFullYear()}
        </Copyrights>
      </BottomFooter>
    </Wrapper>
  );
};

export default Footer;
