import styled from "styled-components";

export const Wrapper = styled.div``;

export const FeaturedBlogsContainer = styled.div``;

export const FeaturedColumn = styled.div``;
export const SmallFeaturedColumn = styled.div``;

export const FeaturedCard = styled.div`
  height: 350px;
  position: relative;
  margin: 1.4rem 0;
`;
export const FeaturedImg = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const FeaturedDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;
`;
export const FeaturedTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;
export const FeaturedDate = styled.p`
  margin: 0;
  margin-left: 1rem;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
`;
export const FeaturedTag = styled.p`
  margin: 0;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.primary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
`;
export const DateTagContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SmallFeaturedCard = styled.div`
  height: 350px;
  position: relative;
  margin: 1.4rem 0;
`;
export const SmallFeaturedImg = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const SmallFeaturedDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;
`;
export const SmallFeaturedTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;
export const SmallFeaturedDate = styled.p`
  margin: 0;
  margin-left: 1rem;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
`;
export const SmallFeaturedTag = styled.p`
  margin: 0;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.primary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
`;
export const SmallDateTagContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Featured = ({ featuredBlogs }) => {
  return (
    <FeaturedBlogsContainer>
      <FeaturedColumn>
        <FeaturedCard>
          <FeaturedImg img={featuredBlogs[0].img} />
          <FeaturedDetails>
            <DateTagContainer>
              <FeaturedTag>fashion</FeaturedTag>
              <FeaturedDate>
                {new Date(featuredBlogs[0].createdAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </FeaturedDate>
            </DateTagContainer>
            <FeaturedTitle>{featuredBlogs[0].title}</FeaturedTitle>
          </FeaturedDetails>
        </FeaturedCard>
      </FeaturedColumn>

      <SmallFeaturedColumn>
        {featuredBlogs
          .filter((entry, i) => (i > 0 ? entry : null))
          .map((item) => (
            <SmallFeaturedCard key={item.id}>
              <SmallFeaturedImg img={item.img} />
              <SmallFeaturedDetails>
                <SmallDateTagContainer>
                  <SmallFeaturedTag>Fashion</SmallFeaturedTag>
                  <SmallFeaturedDate>
                    {new Date(item.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </SmallFeaturedDate>
                </SmallDateTagContainer>
                <SmallFeaturedTitle>{item.title}</SmallFeaturedTitle>
              </SmallFeaturedDetails>
            </SmallFeaturedCard>
          ))}
      </SmallFeaturedColumn>
    </FeaturedBlogsContainer>
  );
};
