import React from "react";
import {
  Wrapper,
  DeliverySection,
  DeliveryContainer,
  DeliveryDetails,
  DeliveryText,
  DeliveryIcon,
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
    </Wrapper>
  );
};

export default Footer;
