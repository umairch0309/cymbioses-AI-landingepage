import { useState } from "react";
import { Container, Collapse, NavbarToggler } from "reactstrap";
import {
  NavbarContainer,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarActions,
  LoginLink,
  StartTrialButton,
} from "@styles/LandingNavStyled";
import { useLocation } from "react-router-dom";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();
  const isActive = (url) => pathname === url;
  return (
    <NavbarContainer expand="lg" className="bg-transparent shadow-none">
      <Container className="d-flex justify-content-between flex-wrap flex-lg-nowrap align-items-center">
        <NavbarBrand to="/">
          <img
            src="/images/icons/logo.svg"
            alt="Cymbiose"
            className="logo-img"
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="d-lg-none" />

        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          <NavbarNav className="mx-auto d-block d-lg-flex">
            <NavItem>
              <NavLink to="/" $active={isActive("/")}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="https://medium.com/@cymbiose.ai">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="https://forms.gle/hGZprD8Grd2sRV4S9">
                ⁠Feature requests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink $active={isActive("/our-story")} to="/our-story">
                Our story
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                $active={isActive("/login")}
                className="d-lg-none"
                to="/login"
              >
                Login
              </NavLink>
            </NavItem>
          </NavbarNav>

          <NavbarActions className="d-block d-lg-flex">
            <NavLink
              $active={isActive("/login")}
              className="d-none d-lg-block"
              to="/login"
            >
              Login
            </NavLink>
            {/* <StartTrialButton>Start Trial</StartTrialButton> */}
          </NavbarActions>
        </Collapse>
      </Container>
    </NavbarContainer>
  );
};

export default LandingNavbar;
