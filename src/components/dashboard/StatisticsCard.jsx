import { InfoIcon } from "lucide-react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export function StatisticsCard({ title, value, info = true, className = "" }) {
  return (
    <Card className={`h-100 ${className}`}>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <CardTitle tag="h3" className="small fw-medium text-secondary mb-0">
            {title}
          </CardTitle>
          {info && (
            <InfoIcon
              style={{ width: "16px", height: "16px" }}
              className="text-secondary"
            />
          )}
        </div>
        <CardText tag="p" className="fs-2 fw-semibold mb-0">
          {value}
        </CardText>
      </CardBody>
    </Card>
  );
}
