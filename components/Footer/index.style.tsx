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
