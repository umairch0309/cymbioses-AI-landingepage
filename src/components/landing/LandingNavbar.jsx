import { useState } from "react";
import { Container, Collapse, NavbarToggler } from "reactstrap";
import {
  NavbarContainer,
  NavbarBrand,
  LogoCircle,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarActions,
  LoginLink,
  StartTrialButton,
} from "@styles/LandingNavStyled";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer expand="lg" light>
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand href="/">
          <img
            src="/images/icons/logo.svg"
            alt="Cymbiose"
            className="logo-img"
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="d-lg-none" />

        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          <NavbarNav className="mx-auto">
            <NavItem>
              <NavLink href="/" active>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/help">Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/feedback">Feedback</NavLink>
            </NavItem>
          </NavbarNav>

          <NavbarActions>
            <LoginLink to="/login">Login</LoginLink>
            <StartTrialButton>Start Trial</StartTrialButton>
          </NavbarActions>
        </Collapse>
      </Container>
    </NavbarContainer>
  );
};

export default LandingNavbar;
