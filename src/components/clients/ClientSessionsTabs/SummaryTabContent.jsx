import { Col, Row } from "reactstrap";
import {
  HeadingStyled,
  HTMLContent,
  ButtonStyled,
} from "@styles/ElementsStyled";

import {
  ClientDetailsContainer,
  ClientInfoItem,
  ClientInfoLabel,
  ClientInfoValue,
} from "@styles/ClientDetailStyled";

import { ReactSVG } from "react-svg";
import { PaperclipIcon } from "lucide-react";

const SummaryTabContent = () => {
  return (
    <Row>
      <Col md={8}>
        <HeadingStyled
          $size="22px"
          className="text-dark-purple-2 mb-4"
          $weight={700}
        >
          Session Summary
        </HeadingStyled>
        <HTMLContent>
          The client presented for her first telehealth session due to a phobia
          of bridges that prevents her from attending in-person therapy. She
          reported significant distress and impairment in functioning due to
          this fear, which has developed relatively recently. Ava has a history
          of trauma (abusive previous marriage) and current stressors (job
          insecurity, marital strain) that may be contributing to her anxiety.
          She demonstrated a willingness to engage in therapy and learn coping
          strategies.
          <br /> <br /> Demographic & Background: 42-year-old Black female, U.S.
          citizen, Christian (active in local church), middle socioeconomic
          status (successful business owner). Remarried, heterosexual.
          <br /> <br />
          <h5>Cultural Considerations:</h5>
          <ul>
            <li>
              Faith: Explore how the client's faith and involvement in her
              church community may be a source of strength and support. Consider
              how her faith might influence her perspective on mental health and
              treatment.
            </li>
            <li>
              Family: Strong family bonds are important to the client. Assess
              how her family dynamics may be impacting her anxiety and
              treatment.
            </li>
            <li>
              Stigma: Be mindful of the potential stigma surrounding mental
              health within the Black community. Provide a safe and
              non-judgmental space for the client to share her experiences.
            </li>
            <li>
              Strengths: Acknowledge the client's resilience in overcoming past
              challenges (abusive relationship, alcohol abuse). Highlight her
              strengths (strong familial bonds, successful business, active
              lifestyle, faith) as resources for coping with her current anxiety
            </li>
          </ul>
        </HTMLContent>
      </Col>
      <Col md={4}>
        <ClientDetailsContainer>
          <div className="client-info">
            <ClientInfoItem>
              <ClientInfoLabel>Date</ClientInfoLabel>
              <ClientInfoValue>Oct 15, 2024</ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Client</ClientInfoLabel>
              <ClientInfoValue>Ava Sombori</ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Therapist</ClientInfoLabel>
              <ClientInfoValue>Brandi Herring</ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Last Edit</ClientInfoLabel>
              <ClientInfoValue>Oct 15, 2024</ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Summary</ClientInfoLabel>
              <ClientInfoValue>Session</ClientInfoValue>
            </ClientInfoItem>
            <ClientInfoItem>
              <ClientInfoLabel>Summary</ClientInfoLabel>
              <ClientInfoValue className="text-purple">Session</ClientInfoValue>
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

export default SummaryTabContent;
