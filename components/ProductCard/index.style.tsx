import styled from "styled-components";

export const Container = styled.a`
  display: block;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 1.7rem 0;
`;

export const Img = styled.div<{ url: string }>`
  background: url(${({ url }) => url}) no-repeat;
  background-size: cover;
  background-position: center;
  flex: 3;
`;
export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;
export const Price = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  font-size: 1.2rem;
`;
export const Ratings = styled.div`
  display: flex;
`;

export const Star = styled.div<{ active: boolean }>`
  > svg {
    width: 15px;
    fill: ${({ theme: { colors }, active }) =>
      active ? colors.primary : `${colors.primary}33`};
  }
`;
