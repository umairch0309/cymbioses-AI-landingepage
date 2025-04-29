import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormContainer,
  FormTitle,
  FormDescription,
  ContinueButton,
  BackButton,
  ErrorMessage,
  VerificationCodeContainer,
  VerificationInput,
  ResendCodeText,
  ResendCodeLink,
  InvalidOTPMessage,
} from "@styles/FormStyled";

const StepThree = ({ onBack, onResendCode, isResendingCode, resendTimer }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const verificationCode = watch("verificationCode") || "";

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0);
    }

    const newCode = verificationCode.split("");
    newCode[index] = value;
    setValue("verificationCode", newCode.join(""), { shouldValidate: true });

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (/^\d+$/.test(pastedData)) {
      setValue("verificationCode", pastedData, { shouldValidate: true });

      pastedData.split("").forEach((char, index) => {
        if (inputRefs[index].current) {
          inputRefs[index].current.value = char;
        }
      });

      const lastIndex = Math.min(pastedData.length, 5);
      inputRefs[lastIndex].current?.focus();
    }
  };

  return (
    <FormContainer>
      <FormTitle>Confirm Email Address</FormTitle>
      <FormDescription>
        Please input the verification code we sent you.
      </FormDescription>

      <VerificationCodeContainer>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <VerificationInput
            key={index}
            ref={inputRefs[index]}
            maxLength={1}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            value={verificationCode[index] || ""}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
          />
        ))}
      </VerificationCodeContainer>

      {errors.verificationCode && (
        <ErrorMessage>{errors.verificationCode.message}</ErrorMessage>
      )}

      <InvalidOTPMessage>Invalid OTP. Please try again.</InvalidOTPMessage>

      <ResendCodeText>
        {resendTimer > 0 ? (
          <>
            Resend OTP ({String(resendTimer).padStart(2, "0")}:
            {String(0).padStart(2, "0")})
          </>
        ) : (
          <>
            <ResendCodeLink onClick={onResendCode} disabled={isResendingCode}>
              Resend OTP
            </ResendCodeLink>
          </>
        )}
      </ResendCodeText>

      <ContinueButton type="submit">Continue</ContinueButton>

      <BackButton type="button" onClick={onBack}>
        Go Back
      </BackButton>
    </FormContainer>
  );
};

export default StepThree;
