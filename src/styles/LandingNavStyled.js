import styled from "styled-components";
import { Navbar, Nav } from "reactstrap";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Navbar)`
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const NavbarBrand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--dark-purple-2);
  font-weight: 600;

  .brand-text {
    margin-left: 0.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
  }

  &:hover {
    color: var(--dark-purple-2);
  }
`;

export const LogoCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--dark-purple-2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarNav = styled(Nav)`
  @media (max-width: 992px) {
    margin: 1rem 0;
  }
`;

export const NavItem = styled.div`
  margin: 0 1rem;

  @media (max-width: 991px) {
    margin: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  color: var(--dark-purple-2);
  &:after {
    content: "";
    position: absolute;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--dark-purple-2);
    transition: width 0.3s ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const LoginLink = styled(Link)`
  color: var(--dark-purple-2);
  text-decoration: none;
  font-weight: 500;
  margin-right: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #9747ff;
  }

  @media (max-width: 991px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const StartTrialButton = styled.button`
  background-color: #1e0e32;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2b2f38;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
