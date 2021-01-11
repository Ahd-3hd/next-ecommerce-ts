import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
export const Title = styled.h1``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1.5fr 1fr;
  }
`;
export const Column = styled.div``;
export const BillingForm = styled.form``;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    flex-direction: row;
  }
`;
export const FormTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 1rem;
  text-align: center;
`;
export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
export const InputField = styled.input`
  height: 2.7rem;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  font-weight: 600;
  padding: 0.5rem;
  color: ${({ theme: { colors } }) => colors.primary};
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const InputLabel = styled.label`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  font-weight: 500;
`;

export const OrderSummary = styled.div``;

export const OrderSummerTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const ProductSummary = styled.div`
  height: 70px;
  display: flex;
  margin: 1rem 0;
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}08`};
`;
export const ProductImg = styled.div<{ img: string }>`
  flex: 1;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const ProductDetails = styled.div`
  flex: 2;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.primary};
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    flex: 4;
  }
`;
export const ProductTitle = styled.p`
  margin: 0;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  font-weight: 500;
`;
export const ProductPrice = styled.p`
  margin: 0;
`;

export const PriceBreakdown = styled.div`
  padding: 0.5rem;
  background: ${({ theme: { colors } }) => colors.grey};
  color: ${({ theme: { colors } }) => colors.primary};

  margin: 1rem 0;
`;
export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;
export const PriceKey = styled.p`
  margin: 0;
  font-weight: 600;
`;
export const PriceValue = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const NoticeParagraph = styled.p`
  font-size: 0.7rem;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  height: 2.8rem;
  background: ${({ theme: { colors } }) => colors.primary};
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
