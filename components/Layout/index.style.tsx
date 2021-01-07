import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 ${({ theme: { spaces } }) => spaces.sm};
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    padding: 0 6rem;
  }
`;
