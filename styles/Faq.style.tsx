import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  max-width: 40ch;
  margin: 2rem auto;
`;
export const Title = styled.h1``;
export const Container = styled.div``;
export const FaqContainer = styled.div`
  border-bottom: 2px solid ${({ theme: { colors } }) => `${colors.primary}55`};
  margin: 3rem 0;
`;
export const FaqQuestion = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;
export const FaqAnswer = styled.p<{ isToggled: boolean }>`
  height: ${({ isToggled }) => (isToggled ? "300px" : "0")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;
