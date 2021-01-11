import Head from "next/head";
import { useState } from "react";
import {
  Wrapper,
  FaqContainer,
  FaqQuestion,
  FaqAnswer,
  Title,
  Container,
} from "../../styles/Faq.style";
import dummyFaq from "../../dummy/dummyFaq.json";

const Faq = () => {
  const [activeFaqs, setActiveFaqs] = useState([]);
  const handleExpand = (id) => {
    if (activeFaqs.includes(id)) {
      setActiveFaqs((prevState) => {
        return prevState.filter((i) => i !== id);
      });
    } else {
      setActiveFaqs((prevState) => {
        return [...prevState, id];
      });
    }
  };
  return (
    <>
      <Head>
        <title>F.A.Q</title>
      </Head>
      <Wrapper>
        <Title>Frequently Asked Questions</Title>
        <Container>
          {dummyFaq.map((entry) => (
            <FaqContainer key={entry.id}>
              <FaqQuestion onClick={() => handleExpand(entry.id)}>
                {entry.title}
              </FaqQuestion>
              <FaqAnswer isToggled={activeFaqs.includes(entry.id)}>
                {entry.text}
              </FaqAnswer>
            </FaqContainer>
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default Faq;
