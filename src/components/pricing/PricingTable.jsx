import { Row, Col, Container, Badge } from "reactstrap";
import { Paragraph, SpanStyled } from "@styles/ElementsStyled";
import {
  PricingTableContainer,
  PricingColumn,
  PricingHeader,
  PricingPrice,
  PricingUnit,
  PricingButton,
  PricingTier,
  StrikethroughPrice,
} from "@styles/PricingStyled";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const PricingTable = () => {
  return (
    <Container fluid className="my-2">
      <div className="d-flex align-items-center mb-4">
        <Link to="/account">
          <BsArrowLeft size={22} className="me-4 text-purple" />
        </Link>
        <Badge className="bg-slow-purple py-2 px-3 text-purple">
          <SpanStyled>Purchase Note</SpanStyled>
        </Badge>
      </div>
      <PricingTableContainer className="border">
        <Row className="g-0">
          <Col xs={12} md={4}>
            <PricingColumn className="border-end">
              <PricingHeader className="border-bottom">
                <PricingPrice>$1</PricingPrice>
                <PricingUnit>/Session</PricingUnit>
                <PricingButton disabled>Current plan</PricingButton>
              </PricingHeader>
              <PricingTier className="border-bottom">
                SOAP, DAP, Intake Session Summary, Treatment Plans, Action Plans
                for Clients
              </PricingTier>
              <PricingTier className="border-bottom">
                Clinical and culturally informed insights
              </PricingTier>
            </PricingColumn>
          </Col>

          <Col xs={12} md={4}>
            <PricingColumn className="border-end">
              <PricingHeader className="border-bottom">
                <StrikethroughPrice>$14.99</StrikethroughPrice>
                <PricingPrice>$9.99</PricingPrice>
                <PricingUnit>/Month</PricingUnit>
                <PricingButton color="primary">Upgrade</PricingButton>
              </PricingHeader>

              <PricingTier className="border-bottom">
                Starter
                <Paragraph
                  $weight={400}
                  $size={"13px"}
                  className="mb-0 mt-2 text-grey7"
                >
                  For individual practices
                </Paragraph>
              </PricingTier>
              <PricingTier className="border-bottom">
                Up to 80 notes per month
              </PricingTier>
              <PricingTier className="border-bottom">
                SOAP, DAP, Intake Session Summary, Treatment Plans, Action Plans
                for Clients
              </PricingTier>
              <PricingTier className="border-bottom">
                Clinical and culturally informed insights
              </PricingTier>
              <PricingTier className="border-bottom">
                Auto DSM-V ICD/CPT Diagnosis
              </PricingTier>
            </PricingColumn>
          </Col>

          {/* Enterprise Column */}
          <Col xs={12} md={4}>
            <PricingColumn>
              <PricingHeader className="border-bottom">
                <PricingPrice>Custom</PricingPrice>
                <PricingButton color="primary">Contact Us</PricingButton>
              </PricingHeader>
              <PricingTier className="border-bottom">
                Enterprise
                <Paragraph
                  $weight={400}
                  $size={"13px"}
                  className="mb-0 mt-2 text-grey7"
                >
                  Large institutions and hospitals
                </Paragraph>
              </PricingTier>
              <PricingTier className="border-bottom">
                Up to 160 notes per month
              </PricingTier>
              <PricingTier className="border-bottom">
                SOAP, DAP, Intake Session Summary, Treatment Plans, Action Plans
                for Clients
              </PricingTier>
              <PricingTier className="border-bottom">
                Clinical and culturally informed insights
              </PricingTier>
              <PricingTier className="border-bottom">
                Auto DSM-V ICD/CPT Diagnosis
              </PricingTier>
            </PricingColumn>
          </Col>
        </Row>
      </PricingTableContainer>
    </Container>
  );
};

export default PricingTable;
