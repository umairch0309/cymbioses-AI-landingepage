import styled from "styled-components";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 480px;
  }
  width: 100%;
  margin-top: 2rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FormDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

export const FormInputStyled = styled(Input)`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 0.5rem;
  display: block;
  width: 100%;
  font-size: 14px;
  box-shadow: none !important;
  &:focus {
    border-color: var(--purple);
    box-shadow: 0 0 0 0.2rem rgba(151, 71, 255, 0.25);
  }
`;

export const FormSelect = styled(Input)`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 0.5rem;
  appearance: auto;

  &:focus {
    border-color: var(--purple);
    box-shadow: 0 0 0 0.2rem rgba(151, 71, 255, 0.25);
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
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
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background-color: #8a3df0;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--purple);
  font-weight: 500;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: #f04438;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  color: var(--purple);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const VerificationCodeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const VerificationInput = styled.input`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;

  &:focus {
    border-color: var(--purple);
    box-shadow: 0 0 0 0.2rem rgba(151, 71, 255, 0.25);
    outline: none;
  }
`;

export const InvalidOTPMessage = styled.div`
  color: #f04438;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const ResendCodeText = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const ResendCodeLink = styled.button`
  background: none;
  border: none;
  color: var(--purple);
  padding: 0;
  cursor: pointer;
  font-size: 0.875rem;

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;
