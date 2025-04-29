import { SummaryCard, StatsContainer } from "@/styles/EHRStyled";
import { HeadingStyled, Paragraph } from "@styles/ElementsStyled";
import { CardBody } from "reactstrap";

const PatientSummary = ({ medicationsCount, ailmentsCount }) => {
  return (
    <SummaryCard className="border-grey">
      <CardBody className="p-2">
        <HeadingStyled
          $size="28px"
          $weight="700"
          className="mb-4"
          style={{ lineHeight: "1.5" }}
        >
          Patient
          <br />
          Summary
        </HeadingStyled>

        <StatsContainer>
          <div className="stat-item">
            <HeadingStyled
              className="text-dark-purple"
              $size="34px"
              $weight="400"
            >
              {String(medicationsCount).padStart(2, "0")}
            </HeadingStyled>
            <Paragraph className="text-grey4" $size="18px">
              Medications
            </Paragraph>
          </div>

          <div className="stat-item">
            <HeadingStyled
              className="text-dark-purple"
              $size="34px"
              $weight="400"
            >
              {String(ailmentsCount).padStart(2, "0")}
            </HeadingStyled>
            <Paragraph className="text-grey4" $size="18px">
              Ailments
            </Paragraph>
          </div>
        </StatsContainer>
      </CardBody>
    </SummaryCard>
  );
};

export default PatientSummary;
