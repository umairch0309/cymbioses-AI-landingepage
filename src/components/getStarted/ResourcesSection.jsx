import { Link } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { HeadingStyled, SpanStyled, Paragraph } from "@styles/ElementsStyled";

function ResourcesSection() {
  return (
    <div>
      <HeadingStyled $size="12px" className="text-grey mb-3 mt-4 mt-md-0">
        RESOURCES
      </HeadingStyled>
      <Card>
        <CardBody className="p-4">
          <Card className="bg-light3 border-0 mb-4" style={{ height: "9rem" }}>
            <CardBody></CardBody>
          </Card>
          <HeadingStyled $size="18px" className="mb-2 text-dark2">
            Learning Resources
          </HeadingStyled>
          <Paragraph className="text-grey mb-2" $size="12px">
            We have put together some valuable resources for you:
          </Paragraph>
          <ListGroup flush>
            <ListGroupItem className="border-0 ps-0">
              <Link
                to="#"
                className="text-purple d-flex align-items-center gap-1"
              >
                <SpanStyled $size="12px">Our Website</SpanStyled>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 ps-0">
              <Link
                to="#"
                className="text-purple d-flex align-items-center gap-1"
              >
                <SpanStyled $size="12px">Help Center</SpanStyled>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 ps-0">
              <Link
                to="#"
                className="text-purple d-flex align-items-center gap-1"
              >
                <SpanStyled $size="12px">Legal Notes</SpanStyled>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default ResourcesSection;
