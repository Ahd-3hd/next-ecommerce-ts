import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;
export const Title = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const Container = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  }
`;
