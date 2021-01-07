import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 2rem;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1.7fr 1fr;
  }
`;
export const SecondRow = styled.div``;

export const Collection = styled.a`
  position: relative;
  height: 500px;
  ::after {
    content: "";
    background: url("/imgs/collection.jpg") no-repeat;
    background-position: center;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: background-size 0.7s ease;
  }
  :hover {
    ::after {
      background-size: 120%;
    }
  }
`;

export const CollectionTag = styled.div`
  position: absolute;
  z-index: 2;
  background: ${({ theme: { colors } }) => colors.secondary};
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  right: 0.5rem;
  top: 0.5rem;
  color: #ffffff;
  text-align: center;
`;
export const TagSpan = styled.span<{ big?: boolean }>`
  font-size: ${({ big }) => (big ? "1.5rem" : "1rem")};
  font-weight: ${({ big }) => (big ? "700" : "400")};
`;

export const CollectionCard = styled.div`
  position: absolute;
  bottom: 0;
  background: #fff;
  z-index: 2;
  margin: 0.5rem;
  width: 60%;
  padding: 1rem;
  box-shadow: 0px 0px 3px ${({ theme: { colors } }) => `${colors.primary}11`};
`;
export const CollectionCardTitle = styled.p`
  font-weight: 600;
  letter-spacing: 1.5px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 1.5rem;
`;

export const CollectionCardLink = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  > svg {
    width: 20px;
    fill: ${({ theme: { colors } }) => colors.primary};
    margin-left: 2rem;
  }
`;
export const CollectionCardLinkSpan = styled.span``;

export const Sales = styled.a`
  position: relative;
  height: 500px;
  background: url("/imgs/sales.jpg") no-repeat;
  background-position: center;
  background-size: 120%;
  transition: background-size 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ::before {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }
  :hover {
    background-size: 130%;
  }
`;

export const SalesText = styled.p<{ fontSize: string }>`
  margin: 0;
  color: #fff;
  position: relative;
  z-index: 3;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: ${({ fontSize }) => fontSize};
`;
