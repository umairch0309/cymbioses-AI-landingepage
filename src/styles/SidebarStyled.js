import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #f8f7fc;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.3s left;
  @media (max-width: 991px) {
    left: ${(props) => (props.$isOpen ? "0px" : "-300px")};
    z-index: 99;
  }
  @media (min-width: 992px) {
    left: 0px;
    z-index: 99;
  }
`;

export const StepIndicator = styled.div`
  background-color: rgba(151, 71, 255, 0.1);
  color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: inline-block;
  font-weight: 500;
`;

export const SidebarTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const SidebarSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const PurpleText = styled.span`
  color: var(--purple);
`;

export const SidebarDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666;
  max-width: 400px;
`;

export const SidebarLinkStyled = styled(Link)`
  font-size: 14px;
  transition: all 0.3s ease;
  padding-block: 10px;
  &:not(.active) {
    font-weight: 400;
    color: var(--grey-clr);
  }
  &.active {
    font-weight: 500;
  }
  &.active,
  &:hover {
    color: var(--purple);
    background-color: var(--light-bg-2);
  }
`;
