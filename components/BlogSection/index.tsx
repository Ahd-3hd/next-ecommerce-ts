import Link from "next/link";
import {
  Wrapper,
  BlogSectionHeader,
  Title,
  DiscoverLink,
  Container,
  BlogCard,
  BlogImg,
  BlogDetails,
  BlogTitle,
  BlogDescription,
  BlogDate,
  BlogLink,
} from "./index.style";
import ArrowRightIcon from "../../svg/ArrowRightIcon.svg";

const blogsDummy = [
  {
    id: 0,
    img:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Thu Jan 07 2021 22:45:03 GMT+0300 (GMT+03:00)",
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Thu Jan 07 2021 22:45:03 GMT+0300 (GMT+03:00)",
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Thu Jan 07 2021 22:45:03 GMT+0300 (GMT+03:00)",
  },
];

const BlogSection = () => {
  return (
    <Wrapper>
      <BlogSectionHeader>
        <Title>Latest in Blog</Title>
        <Link href="/blog" passHref>
          <DiscoverLink>Discover More</DiscoverLink>
        </Link>
      </BlogSectionHeader>
      <Container>
        {blogsDummy.map((item) => (
          <BlogCard key={item.id}>
            <BlogImg img={item.img} />
            <BlogDetails>
              <BlogTitle>{item.title}</BlogTitle>
              <BlogDescription>{item.description}</BlogDescription>
              <Link href={`/blog/${item.id}`} passHref>
                <BlogLink>
                  Read More <ArrowRightIcon />
                </BlogLink>
              </Link>
            </BlogDetails>
            <BlogDate>
              {new Date(item.date).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </BlogDate>
          </BlogCard>
        ))}
      </Container>
    </Wrapper>
  );
};

export default BlogSection;
