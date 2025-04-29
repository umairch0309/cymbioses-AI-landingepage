import { MedicationsList, MedicationItem } from "@/styles/EHRStyled";
import { HeadingStyled } from "@styles/ElementsStyled";
import { Card, CardBody, CardHeader } from "reactstrap";

const CurrentMedications = ({ medications }) => {
  return (
    <Card className="border-grey overflow-hidden radius-8">
      <CardHeader className="bg-transparent border-grey">
        <HeadingStyled
          className="text-grey mb-0 py-2"
          $size="12px"
          $weight="500"
        >
          CURRENT MEDICATIONS
        </HeadingStyled>
      </CardHeader>
      <CardBody className="p-0">
        <MedicationsList>
          {medications.map((medication, index) => (
            <MedicationItem className="text-dark-purple-2" key={index}>
              {medication}
            </MedicationItem>
          ))}
        </MedicationsList>
      </CardBody>
    </Card>
  );
};

export default CurrentMedications;
