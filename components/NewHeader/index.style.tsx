import styled, { keyframes } from "styled-components";

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
  position: relative;
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

const textAfterAnim = keyframes`
    0%{
        transform: translateX(100%);

    }
    50%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-100%);
        opacity:none;
    }
`;

const textContentAnim = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;
export const TextContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 900;
  font-size: 1.8rem;
  padding: 0.5rem;
  border-left: 3px solid ${({ theme: { colors } }) => colors.primary};
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  > p {
    animation: ${textContentAnim} 0.5s ease-in-out forwards;
    animation-delay: 1.5s;
    opacity: 0;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 2.5rem;
  }
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme: { colors } }) => colors.primary};
    top: 0;
    left: 0;
    transform: translateX(100%);
    animation: ${textAfterAnim} 1s ease-in-out forwards;
    animation-delay: 1s;
  }
`;

export const Text = styled.p`
  margin: 0;
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

const ParagraphAfterAnim = keyframes`
    0%{
        transform:translateX(-100%);
    }
    50%{
        transform:translateX(0)
    }
    100%{
        transform:translateX(100%)
    }
`;

const ParagraphContentAnim = keyframes`
    from{
        opacity:0
    }
    to{
        opacity:1;
    }
`;

export const Paragraph = styled.p`
  background: ${({ theme: { colors } }) => `${colors.primary}99`};
  padding: 0.7rem;
  color: #fff;
  font-size: 0.75rem;
  position: relative;
  left: 0;
  width: 80%;
  line-height: 150%;
  margin-top: 1.5rem;
  max-width: 15ch;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  animation: ${ParagraphContentAnim} 1s ease-in-out forwards;
  animation-delay: 1s;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    left: 0;
    width: 70%;
    font-size: 1rem;
    height: auto;
    background: ${({ theme: { colors } }) => colors.primary};
    margin-top: 2rem;
    max-width: 30ch;
  }
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background: black;
    top: 0;
    right: 0;
    position: absolute;
    transform: translateX(-100%);
    animation: ${ParagraphAfterAnim} 1s ease-in-out forwards;
    animation-delay: 1s;
  }
`;

export const ShopButton = styled.a`
  display: inline-block;
  position: relative;
  margin-top: 2rem;
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
  border: 35px solid ${({ theme: { colors } }) => colors.primary};
  position: absolute;
  z-index: 8;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: block;
    left: 0;
    top: 0;
    width: 230px;
    height: 230px;
    border-radius: 230px;
  }
`;
