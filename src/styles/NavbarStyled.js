import styled from "styled-components";
import { Navbar, NavbarBrand } from "reactstrap";

export const NavbarContainer = styled(Navbar)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const NavbarBrandStyled = styled(NavbarBrand)`
  display: flex;
  align-items: center;
  margin-right: 3rem;
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

export const LoginText = styled.span`
  color: #333;
  font-weight: 500;
`;

export const StartTrialButton = styled.button`
  background-color: var(--dark-purple);
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  color: white;

  &:hover {
    background-color: #2d1154;
  }
`;
