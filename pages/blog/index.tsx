import Head from "next/head";
import { Wrapper, Featured, Recent } from "../../styles/Blogs.style";

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
  const blogs = dummyData;
  return {
    props: {
      blogs,
    },
  };
}

const dummyData = [
  {
    id: 0,
    img:
      "https://images.unsplash.com/photo-1602525664253-c68233a93fb9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1602524210680-5e710ab14f23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title: "consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1426024120108-99cc76989c71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 5,
    img:
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 6,
    img:
      "https://images.unsplash.com/photo-1558667865-70d190c79907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 7,
    img:
      "https://images.unsplash.com/photo-1593765947316-5945ff9b77bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 8,
    img:
      "https://images.unsplash.com/photo-1597833990493-2a9f8de8bdc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 9,
    img:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 10,
    img:
      "https://images.unsplash.com/photo-1520975570331-5a3f28569ee6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    createdAt: "Sat Jan 09 2021 22:32:29 GMT+0300 (GMT+03:00)",
    title:
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];
