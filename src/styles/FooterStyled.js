import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: white;
  border-top: 1px solid #eee;
`;

export const LogoCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--dark-purple);
  border-radius: 50%;
  position: relative;
  margin-right: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
  }
`;

export const FooterTagline = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SocialIcon = styled.span`
  color: #666;
  font-size: 20px;

  &:hover {
    color: var(--purple);
  }
`;

export const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: var(--purple);
  }
`;
