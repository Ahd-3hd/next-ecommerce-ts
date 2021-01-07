import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const BlogSectionHeader = styled.div``;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 0.5rem 0;
`;
export const DiscoverLink = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  padding-bottom: 0.2rem;
  border-bottom: 1.5px solid ${({ theme: { colors } }) => colors.primary};
`;

export const Container = styled.div`
  margin-top: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

export const BlogCard = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 3rem 0;
  position: relative;
`;
export const BlogImg = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  flex: 6;
`;
export const BlogDetails = styled.div`
  flex: 1;
`;
export const BlogTitle = styled.p`
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const BlogDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme: { colors } }) => `${colors.primary}99`};
`;
export const BlogDate = styled.p`
  position: absolute;
  top: 1rem;
  left: 0;
  margin: 0;
  background: #fff;
  color: ${({ theme: { colors } }) => colors.primary};
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
export const BlogLink = styled.a`
  font-size: 0.95rem;
  padding-bottom: 0.3rem;
  color: ${({ theme: { colors } }) => colors.primary};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary};
  > svg {
    width: 20px;
    fill: ${({ theme: { colors } }) => colors.primary};
    margin-left: 0.5rem;
  }
`;
