import styled from "styled-components";
import { Input, Button } from "reactstrap";

export const LoginContainer = styled.div`
  max-width: 575px;
  width: 100%;
  padding: 40px;
  background-color: var(--light-bg);
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const PurpleText = styled.span`
  color: var(--purple);
`;

export const FormInput = styled(Input)`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const TermsCheckbox = styled(Input)`
  &:checked {
    background-color: var(--purple);
    border-color: var(--purple);
  }
`;

export const ContinueButton = styled(Button)`
  background-color: var(--purple);
  border: none;
  border-radius: 8px;
  font-weight: 500;
  padding: 12px !important;

  &:hover {
    background-color: #8a3df0;
  }
`;
