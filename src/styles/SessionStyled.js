import styled from "styled-components";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

export const MainContent = styled.main`
  flex: 1;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    padding-right: 20px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #667085;
  text-decoration: none;
  font-size: 16px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    color: #9747ff;
  }
`;

export const SectionContainer = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .client-selection {
    .select-client {
      flex: 1;

      label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
      }
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: var(--grey-clr);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const SectionDescription = styled.p`
  color: var(--grey-clr);
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 14px;
  color: var(--dark-grey);
`;
export const RecordingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #f9fafb;
  border-radius: 8px;
`;

export const RecordingControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const RecordButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--purple);
  color: white;
  border: none;
  border-radius: 8px 8px ${(props) => (props.$isOpen ? "0 0" : "8px 8px")};
  padding: 12px 20px;
  font-weight: 500;

  .dropdown-icon {
    margin-left: 8px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const StartRecordingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--dark-purple);
  box-shadow: 0px 0px 8px 0px rgba(30, 14, 50, 1);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;

  &:hover {
    background-color: #333;
  }
`;

export const AddClientButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--purple-op-1);
  color: var(--purple);
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: #e4d7ff;
    color: var(--purple);
  }

  &.small {
    padding: 8px 12px;
  }
`;

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TemplateCard = styled.div`
  border: 1px solid ${(props) => (props.$selected ? "#9747FF" : "#EAECF0")};
  border-radius: 8px;
  cursor: pointer;
  background: #fafafa;
  &:hover {
    border-color: var(--purple);
  }
  overflow: hidden;
  .checkbox {
    margin-bottom: 16px;
  }
`;

export const TemplateTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const TemplateDescription = styled.p`
  color: #667085;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const PreviewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: var(--purple);
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 50px;
  background: #f4effe;
`;

export const AddClientContainer = styled.aside`
  padding: 20px;

  overflow-y: auto;
  @media (max-width: 991px) {
    border: 1px solid #eaecf0;
    border-radius: 8px;
  }
  @media (min-width: 992px) {
    border-left: 1px solid #eaecf0;
    border-right: 1px solid #eaecf0;
    width: 400px;
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const FormSection = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const SelectInput = styled(Input)`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;

  &:focus {
    border-color: #9747ff;
    box-shadow: 0 0 0 4px rgba(151, 71, 255, 0.1);
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const SaveButton = styled(Button)`
  flex: 1;
  background-color: #9747ff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;

  &:hover {
    background-color: var(--purple);
  }
`;

export const CancelButton = styled(Button)`
  flex: 1;
  background-color: white;
  color: #667085;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;

  &:hover {
    background-color: #f9fafb;
    color: #667085;
  }
`;
