import { Col, Row } from "reactstrap";
import {
  HeadingStyled,
  Box,
  Paragraph,
  ButtonStyled,
} from "@styles/ElementsStyled";
import {
  ClientDetailsContainer,
  ClientInfoItem,
  ClientInfoLabel,
  ClientInfoValue,
} from "@styles/ClientDetailStyled";
import { ReactSVG } from "react-svg";

const TranscriptTabContent = () => {
  return (
    <Row>
      <Col md={8}>
        <HeadingStyled
          $size="22px"
          className="text-dark-purple-2 mb-4"
          $weight={700}
        >
          Audio Transcript
        </HeadingStyled>
        <Box className="mb-2">
          <Paragraph $size="14px" className="text-grey-clr6 mb-1">
            <strong>Brandi:</strong> &nbsp;All right
          </Paragraph>
          <Paragraph $size="14px" className="text-grey-clr6">
            Hey, Clarissa, it's good to see you again. Last time we spoke about
            you feeling overwhelmed in your desire to find more balance. How
            have things been since then?
          </Paragraph>
        </Box>
        <Box className="mb-2">
          <Paragraph $size="14px" className="text-grey-clr6 mb-1">
            <strong>Clarissa:</strong> &nbsp;It's been a bit of a roller
            coaster,
          </Paragraph>
          <Paragraph $size="14px" className="text-grey-clr6">
            Honestly, I tried some of the time management techniques we talked
            about and they helped a little, but I still feel like I'm barely
            keeping my head above water these days.
          </Paragraph>
        </Box>
      </Col>
      <Col md={4}>
        <ClientDetailsContainer>
          <div className="client-info">
            <ClientInfoItem>
              <ClientInfoLabel>Last Edit</ClientInfoLabel>
              <ClientInfoValue className="text-purple">
                Oct 15, 2024
              </ClientInfoValue>
            </ClientInfoItem>
          </div>

          <div className="client-actions mt-5">
            <ButtonStyled className="w-100 bg-purple d-flex align-items-center justify-content-center border-0">
              Regenerate&nbsp;&nbsp;
              <ReactSVG src="/images/icons/star.svg" />
            </ButtonStyled>
          </div>
        </ClientDetailsContainer>
      </Col>
    </Row>
  );
};

export default TranscriptTabContent;
