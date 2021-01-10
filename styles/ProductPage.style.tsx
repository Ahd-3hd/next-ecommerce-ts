import styled from "styled-components";

export const Wrapper = styled.div``;

export const Carousel = styled.div`
  margin: 2rem 0;
`;

export const BigImg = styled.div<{ img: string }>`
  height: 300px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.4s ease;
`;

export const ThumbnailContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;
export const Thumbnail = styled.div<{ img: string; isActive: boolean }>`
  height: 70px;
  width: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.4")};
`;
