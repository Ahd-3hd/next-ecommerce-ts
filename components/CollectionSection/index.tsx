import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  Container,
  Card,
  CardTitle,
  CardParagraph,
  CardLink,
} from "./index.style";
import ArrowRightIcon from "../../svg/ArrowRightIcon.svg";

const img1 =
  "https://images.unsplash.com/photo-1572295182214-b95a30891748?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80";
const img2 =
  "https://images.unsplash.com/photo-1572172793409-c3db4a0ca8df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80";

const CollectionSection = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => setIsVisible(entry.isIntersecting));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.4,
    });
    if (wrapperRef && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
  }, []);
  return (
    <Wrapper ref={wrapperRef} isVisible={isVisible}>
      <Container img={img1} className="container"></Container>
      <Container img={img2} className="container"></Container>
      <Card>
        <CardTitle>Winter Collection</CardTitle>
        <CardParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardParagraph>
        <Link href="/shop" passHref>
          <CardLink>
            Shop Now <ArrowRightIcon />
          </CardLink>
        </Link>
      </Card>
    </Wrapper>
  );
};

export default CollectionSection;
