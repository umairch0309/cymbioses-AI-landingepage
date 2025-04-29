import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import DraftInlineEditor from "@components/core/DraftInlineEditor";
import {
  ButtonStyled,
  HeadingStyled,
  SpanStyled,
} from "@styles/ElementsStyled";
import {
  ClientDetailsContainer,
  ClientInfoItem,
  ClientInfoLabel,
  ClientInfoValue,
} from "@styles/ClientDetailStyled";
import { ReactSVG } from "react-svg";
import {
  ImageIcon,
  PaperclipIcon,
  PlayIcon,
  PlusCircleIcon,
} from "lucide-react";

const CustomNotesTabCOntent = () => {
  return (
    <Row>
      <Col md={8}>
        <HeadingStyled
          $size="22px"
          className="text-dark-purple-2 mb-4"
          $weight={700}
        >
          Cymbiose AI GIRP Note
        </HeadingStyled>
        <UncontrolledDropdown direction="dropend">
          <DropdownToggle className="p-0 bg-transparent text-purple border-0">
            <PlusCircleIcon size={30} />
          </DropdownToggle>
          <DropdownMenu className="border-grey shadow-sm">
            <DropdownItem className="text-dark-purple-2 mb-2">
              <label>
                <ImageIcon size={18} className="me-2" />
                <SpanStyled $size={"14px"}>Upload Image</SpanStyled>
                <input className="d-none" type="file" accept="image/*" />
              </label>
            </DropdownItem>
            <DropdownItem className="text-dark-purple-2">
              <label>
                <PlayIcon size={18} className="me-2" />
                <SpanStyled $size={"14px"}>Embed Video</SpanStyled>
                <input className="d-none" type="file" accept="video/*" />
              </label>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <DraftInlineEditor />
      </Col>
      <Col md={4}>
        <ClientDetailsContainer>
          <div className="client-info">
            <ClientInfoItem>
              <ClientInfoLabel>Date</ClientInfoLabel>
              <ClientInfoValue className="text-purple">
                Oct 15, 2024
              </ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Template</ClientInfoLabel>
              <ClientInfoValue className="text-purple">
                GIRP Template
              </ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Sharing</ClientInfoLabel>
              <ClientInfoValue className="text-purple">
                Team only
              </ClientInfoValue>
            </ClientInfoItem>
          </div>
          <div className="client-actions mt-5">
            <ButtonStyled className="w-100 bg-purple d-flex align-items-center justify-content-center border-0">
              Regenerate&nbsp;&nbsp;
              <ReactSVG src="/images/icons/star.svg" />
            </ButtonStyled>
            <ButtonStyled className="w-100 bg-transparent text-purple mt-3 d-flex align-items-center justify-content-center border-purple">
              Copy Link&nbsp;&nbsp;
              <PaperclipIcon size={16} />
            </ButtonStyled>
          </div>
        </ClientDetailsContainer>
      </Col>
    </Row>
  );
};

export default CustomNotesTabCOntent;
