import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import {
  FooterContainer,
  LogoCircle,
  FooterTagline,
  SocialIconsContainer,
  SocialIcon,
  FooterLink,
} from "@/styles/FooterStyled";

const Footer = () => {
  return (
    <Container fluid>
      <FooterContainer>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <div className="mb-2">
                <img
                  src="/images/icons/logo.svg"
                  alt="Cymbiose"
                  className="logo-img"
                />
              </div>
              <FooterTagline>
                Fully redefining the relationship
                <br />
                between therapists and technology.
              </FooterTagline>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-md-end">
                <SocialIconsContainer>
                  <Link href="#" passHref>
                    <SocialIcon>
                      <FaInstagram />
                    </SocialIcon>
                  </Link>
                  <Link href="#" passHref>
                    <SocialIcon>
                      <FaLinkedin />
                    </SocialIcon>
                  </Link>
                  <Link href="#" passHref>
                    <SocialIcon>
                      <FaYoutube />
                    </SocialIcon>
                  </Link>
                  <Link href="#" passHref>
                    <SocialIcon>
                      <FaEnvelope />
                    </SocialIcon>
                  </Link>
                </SocialIconsContainer>
              </div>
              <div className="d-flex flex-wrap justify-content-md-end gap-3 mt-3">
                <FooterLink href="#consent">Consent Form</FooterLink>
                <FooterLink href="#terms">Terms and Conditions</FooterLink>
                <FooterLink href="#privacy">Privacy Policy</FooterLink>
                <FooterLink href="#hipaa">HIPAA Compliance</FooterLink>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
