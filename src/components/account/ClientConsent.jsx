import {
  SectionContainer,
  TemplateGrid,
  TemplateCard,
  TemplateTitle,
  TemplateDescription,
  PreviewButton,
} from "@styles/SessionStyled";

import { EyeIcon } from "lucide-react";
import { ReactSVG } from "react-svg";

const ClientConsent = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <SectionContainer>
      <TemplateGrid>
        <TemplateCard
          $selected={selectedTemplate === "soap"}
          onClick={() => onSelectTemplate("soap")}
          className="d-flex flex-column"
        >
          <div className="p-4">
            <div className="checkbox">
              {selectedTemplate === "soap" ? (
                <ReactSVG src="/images/icons/checked.svg" />
              ) : (
                <ReactSVG src="/images/icons/square.svg" />
              )}
            </div>

            <TemplateTitle>
              Cymbiose AI Business Associate Agreement
            </TemplateTitle>
            <TemplateDescription>
              Short, one sentence description of the template for context.
            </TemplateDescription>
          </div>
          <PreviewButton className="px-4">
            <EyeIcon size={16} />
            Preview Template
          </PreviewButton>
        </TemplateCard>

        <TemplateCard
          $selected={selectedTemplate === "dap"}
          onClick={() => onSelectTemplate("dap")}
          className="d-flex flex-column"
        >
          <div className="p-4">
            <div className="checkbox">
              {selectedTemplate === "dap" ? (
                <ReactSVG src="/images/icons/checked.svg" />
              ) : (
                <ReactSVG src="/images/icons/square.svg" />
              )}
            </div>

            <TemplateTitle>Client Consent</TemplateTitle>
            <TemplateDescription>
              Short, one sentence description of the template for context.
            </TemplateDescription>
          </div>

          <PreviewButton className="px-4 mt-auto">
            <EyeIcon size={16} />
            Preview Template
          </PreviewButton>
        </TemplateCard>
      </TemplateGrid>
    </SectionContainer>
  );
};

export default ClientConsent;
