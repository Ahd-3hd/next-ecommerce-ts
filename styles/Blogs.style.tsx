import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div``;

export const FeaturedBlogsContainer = styled.div`
  margin: 2rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export const FeaturedColumn = styled.div``;
export const SmallFeaturedColumn = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const FeaturedCard = styled.a`
  display: block;
  height: 350px;
  position: relative;
  margin: 1.4rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    height: 100%;
    margin: 0;
  }
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

export const SmallFeaturedCard = styled.a`
  display: block;
  height: 350px;
  position: relative;
  margin: 1.4rem 0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    margin: 0;
  }
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
export const FeaturedBlogsWrapper = styled.div``;
export const SectionTitle = styled.p`
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const Featured = ({ featuredBlogs }) => {
  return (
    <FeaturedBlogsWrapper>
      <SectionTitle>Featured Blogs</SectionTitle>
      <FeaturedBlogsContainer>
        <FeaturedColumn>
          <Link href={`/blog/${featuredBlogs[0].id}`} passHref>
            <FeaturedCard>
              <FeaturedImg img={featuredBlogs[0].img} />
              <FeaturedDetails>
                <DateTagContainer>
                  <FeaturedTag>fashion</FeaturedTag>
                  <FeaturedDate>
                    {new Date(featuredBlogs[0].createdAt).toLocaleString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </FeaturedDate>
                </DateTagContainer>
                <FeaturedTitle>{featuredBlogs[0].title}</FeaturedTitle>
              </FeaturedDetails>
            </FeaturedCard>
          </Link>
        </FeaturedColumn>

        <SmallFeaturedColumn>
          {featuredBlogs
            .filter((entry, i) => (i > 0 ? entry : null))
            .map((item) => (
              <Link href={`/blog/${item.id}`} passHref key={item.id}>
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
              </Link>
            ))}
        </SmallFeaturedColumn>
      </FeaturedBlogsContainer>
    </FeaturedBlogsWrapper>
  );
};

export const RecentBlogsWrapper = styled.div``;
export const RecentBlogsContainer = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const RecentCard = styled.a`
  display: block;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;
export const RecentImg = styled.div<{ img: string }>`
  flex: 3;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const RecentDetails = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RecentDateTagContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RecentDate = styled.p`
  margin: 0;
  margin-left: 1rem;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #fff;
`;
export const RecentTag = styled.p`
  margin: 0;
  padding: 0.6rem;
  background: ${({ theme: { colors } }) => colors.primary};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #fff;
`;
export const RecentTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

export const Recent = ({ recentBlogs }) => {
  return (
    <RecentBlogsWrapper>
      <SectionTitle>Recent Blogs</SectionTitle>
      <RecentBlogsContainer>
        {recentBlogs.map((entry) => (
          <Link href={`/blog/${entry.id}`} key={entry.id} passHref>
            <RecentCard>
              <RecentImg img={entry.img} />
              <RecentDetails>
                <RecentDateTagContainer>
                  <RecentTag>Fashion</RecentTag>
                  <RecentDate>
                    {new Date(entry.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </RecentDate>
                </RecentDateTagContainer>
                <RecentTitle>{entry.title}</RecentTitle>
              </RecentDetails>
            </RecentCard>
          </Link>
        ))}
      </RecentBlogsContainer>
    </RecentBlogsWrapper>
  );
};
