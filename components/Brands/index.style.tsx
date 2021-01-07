import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;
  background: ${({ theme: { colors } }) => colors.grey};
  padding: 7rem 0;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.7rem;
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 0.7rem 0;
  font-weight: 600;
`;
export const Subtitle = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme: { colors } }) => `${colors.primary}99`};
  font-weight: 600;
  margin: 0;
`;

export const Container = styled.div`
  padding: 1rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`;

export const BrandContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
export const BrandImg = styled.img`
  width: 100%;
  background: #fff;
  max-width: 250px;
`;
export const DiscountParagraph = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
  text-align: center;
`;
export const DiscountSpan = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary};
`;
