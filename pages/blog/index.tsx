import Head from "next/head";
import { Wrapper, Featured, Recent } from "../../styles/Blogs.style";
import dummyContent from "../../dummy/dummyBlogs.json";

const Blog = ({ blogs }) => {
  const featuredBlogs = [blogs[0], blogs[1], blogs[2]];
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Wrapper>
        <Featured featuredBlogs={featuredBlogs} />
        <Recent recentBlogs={blogs} />
      </Wrapper>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const blogs = dummyContent;
  return {
    props: {
      blogs,
    },
  };
}
