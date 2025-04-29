import { BsArrowRight } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const PurchaseNote = ({ title, value, className = "" }) => {
  return (
    <Card className={`h-100 ${className}`}>
      <CardBody className="d-flex align-items-center justify-content-between">
        <div>
          <CardText tag="p" className="fs-2 fw-semibold mb-1">
            {title}
          </CardText>
          <CardTitle tag="h3" className="small fw-medium text-secondary mb-0">
            {value}
          </CardTitle>
        </div>
        <Link to="/pricing">
          <CgArrowRight
            size={22}
            className="text-secondary text-purple cursor-pointer"
          />
        </Link>
      </CardBody>
    </Card>
  );
};

export default PurchaseNote;
