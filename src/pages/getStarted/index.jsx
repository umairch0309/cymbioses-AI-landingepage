import { Row, Col } from "reactstrap";
import { QuickActionCard } from "@components/getStarted/QuickActionCard";
import { DemoSection } from "@components/getStarted/DemoSection";
// import ResourcesSection from "@components/getStarted/ResourcesSection";
import { HeadingStyled } from "@styles/ElementsStyled";

const GetStartedPage = () => {
  return (
    <div className="mb-8">
      <HeadingStyled $size="12px" className="text-grey mb-3 text-uppercase">
        QUICK ACTIONS
      </HeadingStyled>
      <Row>
        <Col md="4" className="mb-4">
          <QuickActionCard
            icon="/images/icons/play.svg"
            title="Start Session"
            description="Start a new audio or video session"
          />
        </Col>
        <Col md="4" className="mb-4">
          <QuickActionCard
            icon="/images/icons/user-plus.svg"
            title="Add Client"
            description="Or import from existing client base"
          />
        </Col>
        <Col md="4" className="mb-4">
          <QuickActionCard
            icon="/images/icons/card.svg"
            title="Manage Billing"
            description="Purchase more credits or subscribe"
          />
        </Col>
        <Col md={6} className="pt-md-4">
          <DemoSection />
        </Col>
        {/* <Col md={5} className="pt-md-4">
          <ResourcesSection />
        </Col> */}
      </Row>
    </div>
  );
};

export default GetStartedPage;
