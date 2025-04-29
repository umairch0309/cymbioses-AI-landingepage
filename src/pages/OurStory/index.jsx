import { Container } from "reactstrap";
import { OurStoryWrapper, OurStoryContent } from "@styles/OurStoryStyled";
import {
  HeadingStyled,
  Box,
  Paragraph,
  SpanStyled,
} from "@styles/ElementsStyled";

const OurStory = () => {
  return (
    <OurStoryWrapper className="mt-4 mt-md-5 mb-5">
      <Container>
        <OurStoryContent className="p-md-5 p-4">
          <HeadingStyled
            $weight="600"
            className="text-center mb-3"
            $size="30px"
          >
            Our Story
          </HeadingStyled>
          <Box className="text-center">
            <img
              src="/images/owner-avatar.png"
              alt="owner-avatar"
              className="rounded-circle"
            />
            <Box className="mt-3">
              <HeadingStyled
                $weight="600"
                className="text-center mb-1"
                $size="26px"
              >
                Brandi Herring
              </HeadingStyled>
              <SpanStyled className="text-pink" $size="16px" $fontWeight={600}>
                CEO & Co-founder
              </SpanStyled>
              <Paragraph className="text-start mt-4">
                As both a therapist and a client, I’ve lived the very challenges
                Cymbiose AI seeks to solve. I know the exhaustion of endless
                documentation, the frustration of lock of culturally informed
                care in therapy, and the burnout that drives too many clinicians
                out of the field. I’ve felt the weight of trying to provide
                quality care while navigating an inefficient system.
                <br />
                <br />
                <br />
                But this isn’t just my story-it’s the reality for countless
                clinicians and clients. The health care system has long
                overlooked the impact culture, making it harder for clients to
                feed truly seen for clinicians to deliver care that resonates
                <br />
                <br />
                That’s why I co-founded Cymbiose AI. More than just a tool,
                Cymbiose AI is a culturally informed, AI-powered platform
                designed to streamline documentation, reduce clinician burnout,
                and provide insights that enhance therapy across diverse
                backgrounds. By lifting the administration burden, we empower
                therapists to focus on what truly matters: their clients.
              </Paragraph>
            </Box>
          </Box>
        </OurStoryContent>
      </Container>
    </OurStoryWrapper>
  );
};

export default OurStory;
