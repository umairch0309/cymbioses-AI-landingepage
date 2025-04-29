import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  transition: margin-left 0.3s ease;

  @media (min-width: 992px) {
    margin-left: 220px;
  }
`;
