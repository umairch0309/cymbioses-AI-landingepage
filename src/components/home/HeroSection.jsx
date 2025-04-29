import { Container, Row, Col } from "reactstrap";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  WaitlistButton,
  HeroImageContainer,
} from "@styles/HomePageStyled";

const HeroSectionContent = () => {
  return (
    <HeroSection>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="mb-5 mb-lg-0">
            <HeroContent>
              <HeroTitle>
                Free your mind for what matters most: your clients, your care,
                and yourself.
              </HeroTitle>
              <HeroDescription>
                Culturally informed AI that saves you 16+ hours a month on
                documentation, while weaving clinical insights and cultural
                insights, and smart business tools into your everyday practice.
                Made for therapists by therapists.
              </HeroDescription>
              <WaitlistButton>Join the Community</WaitlistButton>
            </HeroContent>
          </Col>
          <Col lg={5}>
            <HeroImageContainer>
              <img
                src="/images/hero-img.gif"
                alt="Therapist working on laptop"
                className="hero-image"
              />
            </HeroImageContainer>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default HeroSectionContent;
