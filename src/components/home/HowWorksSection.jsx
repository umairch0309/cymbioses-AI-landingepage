import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import {
  HeadingStyled,
  Box,
  Paragraph,
  SpanStyled,
} from "@styles/ElementsStyled";
import { WaitlistButton } from "@styles/HomePageStyled";

const data = [
  {
    title: "Set Up with Ease",
    description:
      "Quickly add a new client or select one you’re already working with. Choose your preferred note template and input method — type, talk, or upload.",
  },
  {
    title: "Focus on the Session",
    description:
      "As you show up for your client, Cymbiose captures the details, so you can focus on what matters most- your client.",
  },
  {
    title: "Get Clear, Insightful Notes in Seconds",
    description:
      "Receive a ready-to-review session summary, clinical insights, your formatted note, and an optional action plan to share — all in one place.",
  },
];

const HowWorksSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="py-5 my-4">
      <Container>
        <SpanStyled
          $size="14px"
          $fontWeight="500"
          className="text-uppercase mb-3 d-block"
        >
          HOW IT WORKS
        </SpanStyled>
        <HeadingStyled $size="30px" $line="34px">
          <SpanStyled $size="30px" $fontWeight="600 " className="text-purple">
            More time
          </SpanStyled>{" "}
          for clients.
          <br />
          More space for you.
        </HeadingStyled>
        <Row>
          <Col className="mt-4 pt-1" lg={5} xs={12}>
            <ul className="list-unstyled">
              {data.map((item, key) => (
                <li key={key}>
                  <Box
                    className="mb-5 cursor-pointer"
                    onClick={() => setSelected(key)}
                  >
                    <HeadingStyled
                      $size="18px"
                      $line="34px"
                      className={
                        selected === key ? "text-dark-purple-2" : "text-grey7"
                      }
                      $weight={selected === key ? 700 : 500}
                    >
                      {item.title}
                    </HeadingStyled>
                    <Paragraph className="text-grey2">
                      {item.description}
                    </Paragraph>
                  </Box>
                </li>
              ))}
            </ul>
            <Box>
              <WaitlistButton>Join Waitlist</WaitlistButton>
            </Box>
          </Col>
          <Col className="mt-4 pt-1 text-center offset-1" lg={6} xs={12}>
            <img
              src="/images/work-frame.png"
              alt="work-frame"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowWorksSection;
