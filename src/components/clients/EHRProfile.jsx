import { Container, Row, Col } from "reactstrap";
import PatientSummary from "@components/clients/PatientSummary";
import CurrentMedications from "@components/clients/CurrentMedications";
import ClientAppointments from "@components/clients/ClientAppointments";
import InsuranceDetails from "@components/clients/InsuranceDetails";
import { SessionsTable } from "@components/dashboard/SessionsTable";

export default function EHRProfile() {
  // Sample data for medications
  const medications = [
    "Prescription for Tranquilizer Medication",
    "Prescription for Melodic Sedative",
    "Prescription for Blissful Relaxant",
    "Prescription for Peaceful Anxiolytic",
    "Prescription for Revitalizing Stimulant",
    "Prescription for Peaceful Anxiolytic",
  ];

  // Sample insurance data
  const insuranceData = {
    provider: "NHIS",
    policyNumber: "CYM-00001",
    receipent: "Ava Sombori",
    validity: "JAN, 2025",
    uploads: ["Insurance Card", "Covered Services"],
  };

  const columns = [
    { key: "month", title: "Month" },
    { key: "title", title: "Invoice Title" },
  ];

  const rows = [
    {
      id: "1",
      month: "January",
      title: "Invoice for January 2023",
    },
    {
      id: "2",
      month: "February",
      title: "Invoice for February 2023",
    },
    {
      id: "3",
      month: "March",
      title: "Invoice for March 2023",
    },
    {
      id: "4",
      month: "April",
      title: "Invoice for April 2023",
    },
    {
      id: "5",
      month: "May",
      title: "Invoice for May 2023",
    },
    {
      id: "6",
      month: "June",
      title: "Invoice for June 2023",
    },
    {
      id: "7",
      month: "June",
      title: "Invoice for July 2023",
    },
  ];

  return (
    <Container fluid>
      <Row className="g-4">
        <Col lg={4} md={6}>
          <PatientSummary medicationsCount={13} ailmentsCount={4} />
        </Col>
        <Col lg={4} md={6}>
          <CurrentMedications medications={medications} />
        </Col>
        <Col lg={4} md={12}>
          <ClientAppointments hasAppointments={false} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={8} className="mb-4 mb-lg-0">
          <SessionsTable rows={rows} columns={columns} />
        </Col>
        <Col lg={4}>
          <InsuranceDetails insurance={insuranceData} />
        </Col>
      </Row>
    </Container>
  );
}
