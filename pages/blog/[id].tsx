import Head from "next/head";
import {
  Wrapper,
  Intro,
  Title,
  Img,
  IntroParagraph,
  AuthorAvatar,
  AuthorName,
  MetaContainer,
  BlogDate,
  NameDateContainer,
  Middle,
  MiddleText,
  Outro,
  OutroText,
} from "../../styles/BlogPage.style";
import dummyContent from "../../dummy/dummyBlogs.json";

const BlogPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Wrapper>
        <Intro>
          <Img img={data.img} />
          <Title>{data.title}</Title>
          <MetaContainer>
            <AuthorAvatar img={data.avatar} />
            <NameDateContainer>
              <AuthorName>{data.author}</AuthorName>
              <BlogDate>
                {new Date(data.createdAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </BlogDate>
            </NameDateContainer>
          </MetaContainer>
          <IntroParagraph>{data.body.intro}</IntroParagraph>
        </Intro>
        <Middle>
          <MiddleText>{data.body.middle}</MiddleText>
        </Middle>
        <Outro>
          <OutroText>{data.body.outro}</OutroText>
        </Outro>
      </Wrapper>
    </>
  );
};

export default BlogPage;

export async function getServerSideProps(context) {
  const data = dummyContent.find(
    (item) => item.id === parseInt(context.query.id)
  );

  return {
    props: {
      data,
    },
  };
}
