import Link from "next/link";
import {
  Wrapper,
  Container,
  GreySide,
  ModelImg,
  WhiteSide,
  TextContainer,
  Text,
  Paragraph,
  ShopButton,
  WhiteSideCircle,
  GreySidecircle,
} from "./index.style";
import ArrowRightICon from "../../svg/ArrowRightIcon.svg";

const NewHeader = () => {
  return (
    <Wrapper>
      <Container>
        <WhiteSide>
          <TextContainer>
            <Text>Collection</Text>
            <Text>
              Winter <span>2021</span>
            </Text>
          </TextContainer>
          <Paragraph>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
          <ShopButton>
            Start Shopping <ArrowRightICon />
          </ShopButton>
          <WhiteSideCircle />
        </WhiteSide>
        <GreySide>
          <ModelImg src="/imgs/headernew.png" alt="model" />
          <GreySidecircle />
        </GreySide>
      </Container>
    </Wrapper>
  );
};

export default NewHeader;
