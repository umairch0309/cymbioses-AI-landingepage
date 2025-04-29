import { Card } from "reactstrap";
import styled from "styled-components";

export const ActionCardStyled = styled(Card)`
  background-color: var(--light-bg-2);
  border-radius: 8px;
  border: 1px solid var(--light-bg-3);
  transition: border-color 0.3s ease;
  .action-card-icon {
    width: 31px;
    height: 31px;
  }
  &:hover {
    border-color: var(--purple);
  }
`;
