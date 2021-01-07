import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Collection = styled.a`
  display: block;
  height: 450px;
  background: url("/imgs/collection.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const CollectionTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.6rem;
  height: 5.5rem;
  width: 5.5rem;
  background: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 5rem;
`;
export const CollectionSpan = styled.span<{ big?: boolean }>`
  font-size: ${({ big }) => (big ? "1.3rem" : "1rem")};
  font-weight: ${({ big }) => (big ? "600" : "500")};
`;

export const CollectionCard = styled.div`
  display: block;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0.5rem;
  width: 70%;
  padding: 0.6rem;
`;
export const CollectionCardTitle = styled.p`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;
export const CollectionCardLink = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  color: ${({ theme: { colors } }) => colors.primary};

  > svg {
    width: 25px;
    fill: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const ColumnBottomWrapper = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 2rem;
  }
`;
export const ColumnBottomContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 300px;
  background: url("/imgs/watch.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const ColumnBottomContainerText = styled.p<{ big?: boolean }>`
  z-index: 2;
  color: #fff;
  > svg {
    fill: #fff;
    width: 20px;
  }
  font-size: ${({ big }) => (big ? "2rem" : "1rem")};
  margin: 1rem 0;
  letter-spacing: 1px;
`;
export const NewsletterContainer = styled.div`
  height: 300px;
  background: linear-gradient(to right, #fd746c, #ff9068);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewsletterForm = styled.form`
  display: flex;
`;
export const NewsletterInput = styled.input`
  flex: 2;
  height: 2.9rem;
  background: transparent;
  border: 2px solid #fff;
  border-right: none;
  padding-left: 1rem;
  font-weight: 600;
  outline: none;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;
export const NewsletterButton = styled.button`
  flex: 1;
  height: 2.9rem;
  background: transparent;
  border: 2px solid #fff;
  border-left: none;
  color: #fff;
  font-size: 1.1rem;
`;

export const SalesContainer = styled.a`
  background: url("/imgs/sales.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 450px;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-size 0.6s ease;
`;

export const SalesText = styled.p<{ big?: boolean }>`
  color: #fff;
  z-index: 3;
  font-weight: 600;
  font-size: ${({ big }) => (big ? "2rem" : "0.95rem")};
  letter-spacing: 1px;
`;
export const SneakersContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url("/imgs/sneakers.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
  transition: background-size 0.6s ease;
  position: relative;
  ::after {
    content: "";
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const NewsletterText = styled.p<{ big?: boolean }>`
  color: #fff;
  font-size: ${({ big }) => (big ? "1.5rem" : "1rem")};
  text-align: center;
`;
