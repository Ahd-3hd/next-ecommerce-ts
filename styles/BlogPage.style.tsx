import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    max-width: 80ch;
    margin: 4rem auto;
    background: #fff;
    p {
      max-width: 60ch;
    }
  }
`;

export const Intro = styled.div``;
export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const Img = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 500px;
`;
export const IntroParagraph = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const AuthorAvatar = styled.div<{ img: string }>`
  background: url(${({ img }) => img});
  background-size: cover;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 1rem;
`;
export const AuthorName = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
`;
export const NameDateContainer = styled.div``;

export const BlogDate = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 0.9rem;
`;
export const MetaContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Middle = styled.div``;
export const MiddleText = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const Outro = styled.div``;
export const OutroText = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
`;
