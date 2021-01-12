import styled from "styled-components";

export const Wrapper = styled.header`
  height: 100vh;
  max-height: 600px;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

export const GreySide = styled.div`
  background: ${({ theme: { colors } }) => colors.grey};
  height: 100%;
  flex: 1;
`;
export const ModelImg = styled.img`
  width: 78%;
  max-width: 350px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    right: 20%;
  }
`;

export const WhiteSide = styled.div`
  flex: 2;
  padding: 4rem 0;
`;

export const TextContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 900;
  font-size: 1.8rem;
  padding: 0.5rem;
  border-left: 3px solid ${({ theme: { colors } }) => colors.primary};
  margin-top: 1rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export const Paragraph = styled.p`
  background: ${({ theme: { colors } }) => `${colors.primary}99`};
  padding: 0.7rem;
  color: #fff;
  font-size: 0.75rem;
  position: absolute;
  left: 0;
  width: 80%;
  line-height: 150%;
  margin-top: 1.5rem;
  max-width: 15ch;
  z-index: 10;
  /* height: 7rem; */
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    left: 0;
    width: 70%;
    font-size: 1rem;
    height: auto;
    background: ${({ theme: { colors } }) => colors.primary};
    margin-top: 2rem;
    max-width: 30ch;
  }
`;

export const ShopButton = styled.a`
  position: relative;
  top: 15rem;
  left: 0rem;
  z-index: 10;
  background: ${({ theme: { colors } }) => colors.primary};
  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  > svg {
    fill: #fff;
    width: 15px;
    margin-left: 0.5rem;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const WhiteSideCircle = styled.div`
  width: 200px;
  height: 200px;
  border: 35px solid ${({ theme: { colors } }) => colors.grey};
  border-radius: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const GreySidecircle = styled.div`
  display: none;
  width: 200px;
  height: 200px;
  border: 35px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 200px;
  position: absolute;
  top: 0.5rem;
  z-index: 8;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: block;
    width: 260px;
    height: 260px;
    right: 0;
  }
`;
