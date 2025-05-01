import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
  padding: 80px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
    h1 {
      font-size: 22px;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 540px;

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.2;
  color: #272727;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WaitlistButton = styled(Link)`
  background-color: #9747ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-weight: 500;
  display: inline-block;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: #8a3df0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(151, 71, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(151, 71, 255, 0.2);
  }

  @media (max-width: 991px) {
    margin: 0 auto;
    display: inline-block;
  }
`;

export const HeroImageContainer = styled.div`
  background-image: url("/images/hero-img-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-image {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 991px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const FocusedOnSectionWrapper = styled.section`
  color: #fff;
`;

export const FocusedOnSectionContent = styled.div`
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0) 9.17%,
    rgba(253, 252, 251, 0.05) 45.98%,
    rgba(249, 248, 245, 0.1) 100%
  );
  @media (max-width: 767px) {
    border-radius: 20px;
    .res-heading {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) {
    border-radius: 48px;
  }
`;

export const FocusedSectionItem = styled.div`
  background: rgba(244, 239, 254, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  .img-area {
    width: 100%;
    height: 250px;
  }
`;
