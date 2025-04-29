import styled from "styled-components";
import { Button } from "reactstrap";

export const ClientDetailsContainer = styled.div`
  padding: 20px;
  background: #f9fafb;
  border-radius: 8px;
`;

export const ClientInfoItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClientInfoLabel = styled.div`
  font-size: 14px;
  color: var(--grey-clr);
`;

export const ClientInfoValue = styled.div`
  font-size: 14px;
  color: var(--dark-purple-2);
  font-weight: 500;
`;

export const UpdateProfileButton = styled(Button)`
  width: 100%;
  background-color: #9747ff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
  padding: 10px;

  &:hover {
    background-color: #8a3df0;
  }

  svg {
    stroke: white;
  }
`;

export const ArchiveClientButton = styled(Button)`
  width: 100%;
  background-color: white;
  border: 1px solid #fda29b;
  color: #d92d20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;

  &:hover {
    background-color: #fef3f2;
    color: #d92d20;
  }

  svg {
    stroke: #d92d20;
  }
`;
