import { Button, Card } from "reactstrap";
import styled from "styled-components";

export const SummaryCard = styled(Card)`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/images/body.png");
  background-repeat: no-repeat;
  background-position: bottom right;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  .stat-item {
    display: flex;
    flex-direction: column;
  }
`;

export const UploadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const UploadItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  background-color: #f2f4f7;
  border-radius: 4px;
  font-size: 12px;
  border-radius: 30px;
  color: var(--grey-clr2);
`;

export const IssueInvoiceButton = styled(Button)`
  width: 100%;
  background-color: #9747ff;
  border: none;
  padding: 10px;
  margin-top: 16px;

  &:hover {
    background-color: #8a3df0;
  }
`;

export const MedicationsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MedicationItem = styled.div`
  padding: 20px 16px;
  &:nth-child(even) {
    background-color: var(--light-slow);
  }
  font-size: 14px;

  &:hover {
    background-color: #f0edfb;
    cursor: pointer;
  }
`;

export const AppointmentsCard = styled(Card)`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AppointmentItem = styled.div`
  display: flex;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
`;

export const AppointmentDate = styled.div`
  min-width: 80px;
  margin-right: 16px;

  .date {
    font-weight: 600;
    color: #101828;
  }

  .time {
    color: #667085;
    font-size: 14px;
  }
`;

export const AppointmentInfo = styled.div`
  .title {
    font-weight: 500;
    color: #101828;
    margin-bottom: 4px;
  }

  .doctor {
    color: #667085;
    font-size: 14px;
  }
`;
