import { CardBody } from "reactstrap";
import { ActionCardStyled } from "@styles/getStartedPageStyled";
import { ReactSVG } from "react-svg";
import { HeadingStyled, Paragraph } from "@styles/ElementsStyled";

export function QuickActionCard({ icon, title, description }) {
  return (
    <ActionCardStyled className="bg-light" style={{ cursor: "pointer" }}>
      <CardBody className="d-flex align-items-start p-4 gap-3">
        <div className={`action-card-icon`}>
          <ReactSVG src={icon} />
        </div>
        <div>
          <HeadingStyled $size="14px" className="mb-1">
            {title}
          </HeadingStyled>
          <Paragraph className="mb-0 text-grey2" $size="12px">
            {description}
          </Paragraph>
        </div>
      </CardBody>
    </ActionCardStyled>
  );
}
