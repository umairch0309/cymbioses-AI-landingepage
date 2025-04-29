import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  flex-shrink: 0;
  font-weight: 500;
  color: ${(props) => (props.$active ? "#9747FF" : "#667085")};
  border-bottom: ${(props) =>
    props.$active ? "2px solid #9747FF" : "2px solid transparent"};
  cursor: pointer;

  &:hover {
    color: #9747ff;
  }
`;
