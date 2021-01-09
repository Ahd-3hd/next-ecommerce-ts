import { Wrapper } from "../../styles/Blogs.style";

const Blog = ({ blogs }) => {
  console.log(blogs);
  return <Wrapper>Blogs</Wrapper>;
};

export default Blog;

export async function getServerSideProps(context) {
  const data = await fetch("https://mockend.com/org/repo/posts");
  console.log(data);
  return {
    props: {
      blogs: [],
    },
  };
}
