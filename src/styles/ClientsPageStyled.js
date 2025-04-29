import { Button, Card, CardBody, Input } from "reactstrap";
import styled from "styled-components";

export const ViewToggleContainer = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 10px;
`;

export const ViewToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.$active ? "var(--light-purple)" : "white")};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "var(--purple)" : "var(--grey-clr5)")};

  &:first-child {
    border-right: 1px solid #e0e0e0;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 400px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 45%;
  transform: translateY(-50%);
  color: #999;
`;

export const SearchInput = styled(Input)`
  padding-left: 35px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  height: 37px;
  color: var(--grey-clr4);
  &:placeholder {
    font-size: 12px;
    color: var(--grey-clr4);
  }
`;

export const ClientCard = styled(Card)`
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  transition: all 0.2s ease;
  height: 100%;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const TimeStamp = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ClientName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ClientInfo = styled.div`
  font-size: 13px;
  margin-bottom: 3px;
`;

export const ViewProfileButton = styled.button`
  border: none;
  padding: 10px 15px;
  margin-top: 15px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ede9ff;
  }

  svg {
    margin-right: 8px;
  }
`;

export const ActionButton = styled(Button)`
  background-color: ${(props) => props.$color || ""};
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: ${(props) => props.$hoverColor || ""};
  }
`;

export const ListViewItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const ListViewInfo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const ListViewName = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 200px;
`;

export const ListViewDetails = styled.div`
  display: flex;
  color: #666;
  font-size: 14px;
  > div {
    margin-right: 30px;
    width: 150px;
  }
`;

export const ListViewActions = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
