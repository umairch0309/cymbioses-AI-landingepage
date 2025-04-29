import {
  SidebarContainer,
  StepIndicator,
  SidebarTitle,
  PurpleText,
  SidebarDescription,
} from "@styles/SidebarStyled";
import { useMemo } from "react";

const SignupSidebar = ({ currentStep }) => {
  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: (
            <>
              <PurpleText>AI-powered</PurpleText> tools to <br /> streamline
              documentation.
            </>
          ),
          description:
            "Sign up today to access all you need to provide personalized care to your clients.",
        };
      case 2:
        return {
          title: (
            <>
              Gain <PurpleText>Insights</PurpleText> that bridge cultural gaps.
            </>
          ),
          description:
            "Sign up today to access all you need to provide personalized care to your clients.",
        };
      case 3:
        return {
          title: (
            <>
              Save time, and improve <PurpleText>therapeutic</PurpleText>{" "}
              outcomes.
            </>
          ),
          description:
            "Sign up today to access all you need to provide personalized care to your clients.",
        };
      default:
        return {
          title: "",
          description: "",
        };
    }
  };

  const content = useMemo(() => getStepContent(), [currentStep]);

  return (
    <SidebarContainer className="p-5">
      <StepIndicator className="w-fit-content">
        Step {currentStep}/3
      </StepIndicator>

      <div className="my-5">
        <SidebarTitle>{content.title}</SidebarTitle>
        <SidebarDescription>{content.description}</SidebarDescription>
      </div>

      <div className="mt-5">
        <img src="/images/signup-vector.png" alt="Illustration" width={400} />
      </div>
    </SidebarContainer>
  );
};

export default SignupSidebar;
