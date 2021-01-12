import styled, { keyframes } from "styled-components";

const animateContainerAfterIn = keyframes`
  0%{
    transform:translateX(-100%);
  }
  50%{
    transform:translateX(0%)
  }
  100%{
    transform:translateX(100%);
  }
`;
const animateContainerAfterOut = keyframes`
  0%{
    transform:translateX(100%);
  }
  50%{
    transform:translateX(0%)
  }
  100%{
    transform:translateX(-100%);
  }
`;

export const Wrapper = styled.div<{ isVisible: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  position: relative;
  margin-top: 3rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  .container {
    ::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme: { colors } }) => colors.primary};
      animation: ${({ isVisible }) =>
          isVisible ? animateContainerAfterIn : animateContainerAfterOut}
        1s ease-in-out forwards;
    }
  }
`;

export const Container = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  flex: 1;
  position: relative;
  overflow: hidden;
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
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
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
