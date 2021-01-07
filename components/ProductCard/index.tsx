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
import React from "react";
const ProductCard = React.forwardRef(
  (
    {
      title,
      img,
      rating,
      price,
      href,
    }: {
      title: string;
      img: string;
      rating: number;
      price: string;
      href: string;
    },
    ref
  ) => {
    return (
      <Container href={href}>
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
    );
  }
);

// const ProductCard = ({ title, img, rating, price }) => {
//   return (
//     <Container>
//       <Img url={img} />
//       <Details>
//         <Title>{title}</Title>
//         <Price>${price}</Price>
//         <Ratings>
//           {[...Array(5)].map((value: undefined, index: number) => (
//             <Star key={index} active={index < rating}>
//               <StarIcon />
//             </Star>
//           ))}
//         </Ratings>
//       </Details>
//     </Container>
//   );
// };

export default ProductCard;
