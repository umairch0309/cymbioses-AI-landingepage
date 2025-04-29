import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FormContainer,
  FormTitle,
  FormDescription,
  PasswordInputWrapper,
  PasswordToggle,
  ContinueButton,
  ErrorMessage,
  LoginLink,
} from "@styles/FormStyled";

import FormInput from "@components/ui/FormInput";

const StepOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerRs = (fieldName, options = {}) => {
    const registeredField = register(fieldName, options);
    const ref = registeredField.ref;
    delete registeredField.ref;
    return { ...registeredField, innerRef: ref };
  };

  return (
    <FormContainer>
      <FormTitle>Personal Details</FormTitle>
      <FormDescription>
        Please fill in your user account details below to create an account.
      </FormDescription>

      <FormGroup className="mb-3">
        <Label for="fullName">Full Name</Label>
        <FormInput
          id="fullName"
          placeholder="Ava Sombori"
          register={register}
          name="fullName"
          invalid={!!errors.fullName}
        />
        {errors.fullName && (
          <ErrorMessage>{errors.fullName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="email">Email</Label>
        <FormInput
          id="email"
          type="email"
          placeholder="name@gmail.com"
          register={register}
          name="email"
          invalid={!!errors.email}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="phone">Phone</Label>
        <FormInput
          id="phone"
          placeholder="XXX XXXX XXX"
          register={register}
          name="phone"
          invalid={!!errors.phone}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="password">Password</Label>
        <PasswordInputWrapper>
          <FormInput
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            register={register}
            name="password"
            invalid={!!errors.password}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </PasswordToggle>
        </PasswordInputWrapper>
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup className="mb-4">
        <Label for="confirmPassword">Confirm Password</Label>
        <PasswordInputWrapper>
          <FormInput
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            register={register}
            name="confirmPassword"
            invalid={!!errors.confirmPassword}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </PasswordToggle>
        </PasswordInputWrapper>
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup check className="mb-4">
        <Input
          type="checkbox"
          id="agreeToTerms"
          {...registerRs("agreeToTerms")}
          className="terms-checkbox"
        />
        <Label for="agreeToTerms" check>
          I agree with Cymbiose{" "}
          <Link
            href="#terms"
            className="text-decoration-none"
            style={{ color: "var(--purple)" }}
          >
            Terms and Conditions
          </Link>
        </Label>
        {errors.agreeToTerms && (
          <ErrorMessage>{errors.agreeToTerms.message}</ErrorMessage>
        )}
      </FormGroup>

      <ContinueButton type="submit">Continue</ContinueButton>

      <LoginLink to="/">I already have an account</LoginLink>
    </FormContainer>
  );
};

export default StepOne;
