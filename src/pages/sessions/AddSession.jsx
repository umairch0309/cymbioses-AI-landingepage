import { useState } from "react";
import RecordingSection from "@components/sessions/RecordingSection";
import ClientSection from "@components/sessions/ClientSection";
import TemplateSection from "@components/sessions/TemplateSection";
import AddClientForm from "@components/clients/AddClientForm";
import { MainContent, BackButton } from "@styles/SessionStyled";
import { ButtonStyled, HeadingStyled } from "@styles/ElementsStyled";
import { Container } from "reactstrap";
import { BsArrowLeft } from "react-icons/bs";
import { ReactSVG } from "react-svg";

export default function AddSessionPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("dap");

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <Container fluid className="d-flex flex-lg-nowrap flex-wrap px-0">
      <MainContent>
        <div className="header">
          <BackButton to="/sessions">
            <BsArrowLeft className="text-purple" size={20} />
            <HeadingStyled
              className="mb-0 ms-1 text-dark"
              $weight={500}
              size="18px"
            >
              Start Session
            </HeadingStyled>
          </BackButton>
          <ButtonStyled
            $width="170px"
            className="bg-purple w-medium-fit-content d-flex align-items-center justify-content-center border-0"
          >
            Regenerate&nbsp;&nbsp;
            <ReactSVG src="/images/icons/star.svg" />
          </ButtonStyled>
        </div>

        <RecordingSection
          isRecording={isRecording}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />

        <ClientSection />

        <TemplateSection
          selectedTemplate={selectedTemplate}
          onSelectTemplate={handleTemplateSelect}
        />
      </MainContent>

      <AddClientForm />
    </Container>
  );
}
