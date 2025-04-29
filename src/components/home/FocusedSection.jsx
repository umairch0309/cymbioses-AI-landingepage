import {
  FocusedOnSectionWrapper,
  FocusedOnSectionContent,
  FocusedSectionItem,
} from "@styles/HomePageStyled";
import { Col, Container, Row } from "reactstrap";
import { HeadingStyled, Box, Paragraph } from "@styles/ElementsStyled";
import { focusCardsData } from "../../utils/staticData";

const FocusedOnSection = () => {
  return (
    <FocusedOnSectionWrapper className="bg-purple-2 py-md-5 py-3">
      <Container className="pt-md-5 pt-4">
        <FocusedOnSectionContent className="p-md-5 p-4">
          {/* <HeadingStyled
            $size="14px"
            className="text-white text-center text-uppercase mb-3"
            $weight={500}
          >
            WE ARE FOCUSED ON
          </HeadingStyled> */}
          <HeadingStyled
            $size="23px"
            className="text-white res-heading mb-md-5 mb-4 text-center"
            $line="30px"
          >
            Reducing burnout, not your
            <br /> presence with our key solutions.
          </HeadingStyled>
          <Row>
            {focusCardsData.map((item, key) => (
              <Col lg={6} xs={12} key={`item-${key + 1}`}>
                <FocusedSectionItem className="p-4 mb-4">
                  <Box
                    className="img-area d-flex align-items-center justify-content-center overflow-hidden text-center bg-white"
                    $radius="16px"
                  >
                    <img
                      src={item.img}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </Box>
                  <Box>
                    <HeadingStyled
                      $size="18px"
                      $weight={500}
                      className="text-white mt-4 mb-3"
                    >
                      {item.title}
                    </HeadingStyled>
                    <Paragraph $size="13px" $line="28px">
                      {item.description}
                    </Paragraph>
                  </Box>
                </FocusedSectionItem>
              </Col>
            ))}
          </Row>
        </FocusedOnSectionContent>
      </Container>
    </FocusedOnSectionWrapper>
  );
};

export default FocusedOnSection;
