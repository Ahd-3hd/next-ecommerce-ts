import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  position: relative;
  margin-top: 3rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Container = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-position: center;
  height: 600px;
  flex: 1;
`;

export const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem 1rem;
  width: 80%;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primary};
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    width: 30%;
  }
`;
export const CardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const CardParagraph = styled.p`
  font-size: 0.85rem;
  line-height: 200%;
`;
export const CardLink = styled.a`
  > svg {
    width: 25px;
    fill: ${({ theme: { colors } }) => colors.primary};
  }
`;
