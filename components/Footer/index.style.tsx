import styled from "styled-components";

export const Wrapper = styled.footer``;

export const DeliverySection = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: flex;
  }
`;
export const DeliveryContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  :nth-child(1) {
    background: #fff5eb;
  }
  :nth-child(2) {
    background: #eef5ff;
  }
  :nth-child(3) {
    background: #fff1f1;
  }
`;
export const DeliveryIcon = styled.img`
  flex: 1;
  width: 100%;
  max-width: 40px;
  min-width: 20px;
`;
export const DeliveryDetails = styled.div`
  flex: 12;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;
export const DeliveryText = styled.p<{ big?: boolean }>`
  margin: 0.5rem 0;
  margin-top: 0;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: ${({ big }) => (big ? "600" : "400")};
  font-size: ${({ big }) => (big ? "0.9rem" : "0.85rem")};
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const FooterTitle = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin: 0.5rem 0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    text-align: center;
  }
`;
export const FooterLinksMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;
export const FooterLinksMenuItem = styled.li`
  margin: 1rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    margin: 0 2rem;
  }
`;
export const FooterLink = styled.a`
  color: #fff;
`;

export const SocialLinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
export const SocialLink = styled.a`
  margin: 0 1rem;
  > svg {
    fill: #fff;
    height: 20px;
  }
`;

export const BlobContainer = styled.div<{ reverse?: boolean }>`
  position: absolute;
  top: ${({ reverse }) => (reverse ? "auto" : "-150px")};
  left: ${({ reverse }) => (reverse ? "auto" : "-150px")};
  bottom: ${({ reverse }) => (reverse ? "-150px" : "auto")};
  right: ${({ reverse }) => (reverse ? "-150px" : "auto")};
  > svg {
    width: 320px;
    fill: rgba(255, 255, 255, 0.1);
  }
  pointer-events: none;
  z-index: 0;
`;

export const Copyrights = styled.p`
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0rem;
  font-size: 0.6rem;
  > a {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
