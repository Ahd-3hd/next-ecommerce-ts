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
  const data = dummyData;
  return {
    props: {
      data,
    },
  };
}

export const dummyData = {
  title: "Lorem ipsum dolor sit amet",
  img:
    "https://images.unsplash.com/photo-1602525664253-c68233a93fb9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
  author: "John Doe",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  body: {
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit sed ullamcorper morbi tincidunt. Rutrum quisque non tellus orci ac auctor. Quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc. Libero volutpat sed cras ornare. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.",
    middle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit sed ullamcorper morbi tincidunt. Rutrum quisque non tellus orci ac auctor. Quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc. Libero volutpat sed cras ornare. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Viverra maecenas accumsan lacus vel facilisis volutpat. Senectus et netus et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit sed ullamcorper morbi tincidunt. Rutrum quisque non tellus orci ac auctor. Quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc. Libero volutpat sed cras ornare. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Viverra maecenas accumsan lacus vel facilisis volutpat. Senectus et netus et malesuada.",
    outro:
      "Vitae ultricies leo integer malesuada nunc vel risus commodo. Duis at consectetur lorem donec massa sapien. Lectus proin nibh nisl condimentum id venenatis a. Pharetra massa massa ultricies mi quis hendrerit. Congue mauris rhoncus aenean vel elit. Eu mi bibendum neque egestas congue quisque egestas diam. Lobortis elementum nibh tellus molestie nunc non blandit. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Varius sit amet mattis vulputate enim. Pellentesque nec nam aliquam sem et tortor. Gravida rutrum quisque non tellus.",
  },
};
