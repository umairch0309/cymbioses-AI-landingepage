import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "@components/signup/StepOne";
import StepTwo from "@components/signup/StepTwo";
import StepThree from "@components/signup/StepThree";
import SignupSidebar from "@components/signup/SignupSidebar";
import { MainContainer } from "@styles/PageStyled";
import { signupSchema } from "@utils/validation/authSchema";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isResendingCode, setIsResendingCode] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();
  const methods = useForm({
    // resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      businessName: "",
      clinicianType: "",
      specialization: "",
      city: "",
      country: "",
      verificationCode: "",
    },
  });

  console.log("Form Methods:", methods.getValues());

  const onSubmit = async (data) => {
    console.log("Current Step:", data);
    if (currentStep === 3) {
      // Submit the form data to your API
      console.log("Form submitted:", data);

      navigate("/get-started");
      // Redirect to dashboard or success page
    } else {
      // Move to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleResendCode = () => {
    setIsResendingCode(true);
    // Simulate API call to resend code
    setTimeout(() => {
      setIsResendingCode(false);
      setResendTimer(60);

      // Start countdown
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1000);
  };

  return (
    <MainContainer>
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={6} className="p-md-5 p-4">
            <Link to="/" className="text-decoration-none">
              <img src="/images/icons/logo.svg" alt="Logo" className="me-2" />
            </Link>

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {currentStep === 1 && <StepOne />}

                {currentStep === 2 && <StepTwo onBack={handleBack} />}

                {currentStep === 3 && (
                  <StepThree
                    onBack={handleBack}
                    onResendCode={handleResendCode}
                    isResendingCode={isResendingCode}
                    resendTimer={resendTimer}
                  />
                )}
              </form>
            </FormProvider>
          </Col>

          <Col md={6}>
            <SignupSidebar currentStep={currentStep} />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}
