import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;
export const Column = styled.div``;
export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const ProductCard = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;
export const ProductImg = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100px;
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;
export const DetailsTitle = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;
export const ProductMeta = styled.div``;
export const ProductMetaText = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => `${colors.primary}99`};
  font-size: 0.85rem;
`;

export const Quantity = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}55`};
  background: #fff;
`;
export const QuantityOption = styled.option``;

export const PriceRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const PriceText = styled.p`
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const PriceBreakdownContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.grey};
  padding: 0.5rem 1rem;

  margin-bottom: 2rem;
`;
export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.primary};
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid ${({ theme: { colors } }) => `${colors.primary}22`};
  margin: 1rem 0;
`;
export const PriceKey = styled.p`
  font-weight: bold;
`;
export const PriceValue = styled.p``;
