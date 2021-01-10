import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 3rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
    align-items: start;
  }
`;

export const Carousel = styled.div``;

export const BigImg = styled.div<{ img: string }>`
  height: 350px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.4s ease;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    height: 550px;
  }
`;

export const ThumbnailContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  background: ${({ theme: { colors } }) => colors.grey};
`;
export const Thumbnail = styled.div<{ img: string; isActive: boolean }>`
  height: 70px;
  width: 70px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.4")};
  margin-right: 0.5rem;
`;

export const ProductDetails = styled.div``;

export const ProductCategoryReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategorySpan = styled.span`
  font-weight: 500;
  color: ${({ theme: { colors } }) => `${colors.primary}99`};
  text-transform: capitalize;
`;
export const Ratings = styled.div`
  display: flex;
`;
export const Star = styled.div<{ active: boolean }>`
  > svg {
    width: 15px;
    fill: ${({ theme: { colors }, active }) =>
      active ? colors.primary : `${colors.primary}33`};
  }
`;

export const ProductTitle = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.secondary};
  margin: 0.5rem 0;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

export const Quantity = styled.select`
  position: relative;
  height: 3rem;
  margin: 0.5rem 0;
  background: #fff;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
  padding: 0 0.5rem;
`;
export const QuantityOption = styled.option``;
export const AddToCart = styled.button`
  height: 3rem;
  background: ${({ theme: { colors } }) => colors.primary};
  border: none;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0.5rem 0;
  > svg {
    width: 20px;
    fill: #fff;
    margin-right: 1rem;
  }
`;
export const AddToFavorite = styled.button`
  height: 3rem;
  background: #fff;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0.5rem 0;
  > svg {
    width: 20px;
    fill: ${({ theme: { colors } }) => colors.primary};
    margin-right: 1rem;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const SizeLabel = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 0;
  font-weight: bold;
  line-height: 2rem;
`;
export const SizeButton = styled.button<{ selected: boolean }>`
  background: transparent;
  border: none;
  color: ${({ theme: { colors }, selected }) =>
    selected ? colors.secondary : colors.primary};
  padding: 0;
  margin: 0 0.5rem;
  font-weight: ${({ selected }) => (selected ? "bold" : "400")};
  font-size: ${({ selected }) => (selected ? "0.85rem" : "0.7rem")};
  line-height: 2rem;
  transition: all 0.1s ease-in;
  outline: none;
  border: 1px solid
    ${({ theme: { colors }, selected }) =>
      selected ? colors.secondary : colors.primary};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme: { colors } }) => colors.grey};
`;
