import HeroSectionContent from "@components/home/HeroSection";
import FocusedOnSection from "@components/home/FocusedSection";
import HowWorksSection from "@components/home/HowWorksSection";
import TestimonialSlider from "@components/home/TestimonialSlider";
import {
  HeadingStyled,
  SpanStyled,
  Paragraph,
  Box,
} from "@styles/ElementsStyled";
import { Container } from "reactstrap";
import { WaitlistButton } from "@styles/HomePageStyled";

export default function HomePage() {
  return (
    <div className="landing-top-bg">
      <HeroSectionContent />
      <FocusedOnSection />
      <HowWorksSection />
      <TestimonialSlider />
      <Container className="pt-0 pt-md-4 mb-5 pb-md-4">
        <HeadingStyled
          $size="36px"
          className="text-center res-heading-text"
          $weight={600}
          $line="44px"
        >
          <SpanStyled
            $size="36px"
            className="text-purple res-heading-text"
            $fontWeight={700}
          >
            Automated
          </SpanStyled>
          <br /> healthcare tailored to
          <br /> your patients' needs
        </HeadingStyled>
        <Paragraph className="text-center mt-3 text-grey2">
          Capture patient progress, treatment plans, and insights through
          intelligent, automated systems.
        </Paragraph>
        <Box className="text-center pt-3">
          <WaitlistButton>Join the Community</WaitlistButton>
        </Box>
      </Container>
    </div>
  );
}
