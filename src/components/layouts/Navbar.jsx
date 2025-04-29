import { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavbarBrandStyled,
  LoginText,
  StartTrialButton,
} from "@styles/NavbarStyled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer expand="lg" light>
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
        <NavbarBrandStyled href="/">
          <img src="/images/icons/logo.svg" alt="Logo" className="me-2" />
        </NavbarBrandStyled>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/" className="mx-3">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#blog" className="mx-3">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#help" className="mx-3">
                Help
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#feedback" className="mx-3">
                Feedback
              </NavLink>
            </NavItem>
          </Nav>
          <div className="d-md-flex align-items-center mx-md-0 mx-3 mt-1">
            <Link to="/" className="text-decoration-none me-3">
              <LoginText>Login</LoginText>
            </Link>
            <StartTrialButton className="d-block mt-md-0 mt-3 w-100">
              Start Trial
            </StartTrialButton>
          </div>
        </Collapse>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
