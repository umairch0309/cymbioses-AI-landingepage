import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
  TemplateGrid,
  TemplateCard,
  TemplateTitle,
  TemplateDescription,
  PreviewButton,
} from "@styles/SessionStyled";

import { ChevronRightIcon, EyeIcon } from "lucide-react";
import { ReactSVG } from "react-svg";

const TemplateSection = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <SectionContainer className="border">
      <div className="section-header">
        <SectionTitle>TEMPLATE DETAILS</SectionTitle>
        <ChevronRightIcon size={16} />
      </div>

      <SectionDescription>
        Go through the available templates and select your most preferred
        template.
      </SectionDescription>

      <TemplateGrid>
        <TemplateCard
          $selected={selectedTemplate === "soap"}
          onClick={() => onSelectTemplate("soap")}
        >
          <div className="p-4">
            <div className="checkbox">
              {selectedTemplate === "soap" ? (
                <ReactSVG src="/images/icons/checked.svg" />
              ) : (
                <ReactSVG src="/images/icons/square.svg" />
              )}
            </div>

            <TemplateTitle>SOAP Note</TemplateTitle>
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
        >
          <div className="p-4">
            <div className="checkbox">
              {selectedTemplate === "dap" ? (
                <ReactSVG src="/images/icons/checked.svg" />
              ) : (
                <ReactSVG src="/images/icons/square.svg" />
              )}
            </div>

            <TemplateTitle>DAP Note</TemplateTitle>
            <TemplateDescription>
              Short, one sentence description of the template for context.
            </TemplateDescription>
          </div>

          <PreviewButton className="px-4">
            <EyeIcon size={16} />
            Preview Template
          </PreviewButton>
        </TemplateCard>
      </TemplateGrid>
    </SectionContainer>
  );
};

export default TemplateSection;
