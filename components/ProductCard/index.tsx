import {
  Container,
  Img,
  Details,
  Title,
  Price,
  Ratings,
  Star,
} from "./index.style";
import StarIcon from "../../svg/StarIcon.svg";
import Link from "next/link";

const ProductCard = ({ id, title, img, rating, price }) => {
  return (
    <Link href={`/shop/${id}`} passHref>
      <Container>
        <Img url={img} />
        <Details>
          <Title>{title}</Title>
          <Price>${price}</Price>
          <Ratings>
            {[...Array(5)].map((value: undefined, index: number) => (
              <Star key={index} active={index < rating}>
                <StarIcon />
              </Star>
            ))}
          </Ratings>
        </Details>
      </Container>
    </Link>
  );
};

export default ProductCard;
