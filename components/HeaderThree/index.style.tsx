import styled from "styled-components";

export const Wrapper = styled.header`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background: ${({ theme: { colors } }) => `${colors.secondary}22`};
  right: 10%;
  z-index: 1;
`;

export const Card = styled.div`
  flex: 1;
  height: 65vh;
  background: #fff;
  z-index: 2;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
`;

export const ImageSection = styled.div`
  flex: 1;
  margin-right: 10%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.secondary};
    z-index: 2;
    mix-blend-mode: multiply;
    opacity: 0.8;
    min-width: 300px;
  }
`;

export const Img = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  right: 0;
  bottom: 0;
  z-index: 1;
  min-width: 300px;
`;

export const WhiteSection = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const TitleContainer = styled.div`
  margin-left: 10%;
`;
export const Title = styled.p`
  font-weight: 900;
  font-size: 3rem;
  color: ${({ theme: { colors } }) => colors.primary};
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export const ShopButton = styled.a`
  margin-left: 10%;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 2rem;
`;

export const SocialContainer = styled.div`
  position: absolute;
  top: 0;
  height: 4rem;
  width: 100%;
`;
export const HorizontalLine = styled.div`
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}33`};
  margin-top: 3rem;
`;

export const SocialLinksContainer = styled.div`
  background: #fff;
  padding: 0.5rem;
  position: absolute;
  top: 1.8rem;
  left: 2rem;
`;
export const SocialLink = styled.a`
  display: inline-block;
  margin: 0 1rem;
  > svg {
    fill: ${({ theme: { colors } }) => colors.primary};
    height: 1.5rem;
  }
`;
