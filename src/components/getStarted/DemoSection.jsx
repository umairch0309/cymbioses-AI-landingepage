import { Row, Col } from "reactstrap";
import { HeadingStyled, ButtonStyled, Paragraph } from "@styles/ElementsStyled";

export function DemoSection() {
  return (
    <div className="mb-4 d-flex flex-column h-100">
      <HeadingStyled $size="12px" className="text-grey mb-3">
        QUICK DEMO
      </HeadingStyled>
      <div className="border rounded p-4 flex-grow-1">
        <Row className="align-items-center h-100">
          <Col
            md={6}
            lg={6}
            xs={12}
            className="d-flex flex-column justify-content-center"
          >
            <div>
              <HeadingStyled $size="18px" className="mb-4 text-dark2">
                Welcome to Cymbiose AI!
              </HeadingStyled>
              <Paragraph $size="12px" className="mb-4 text-dark-grey">
                Glad you’ve decided to start using Cymbiose AI today!
              </Paragraph>
              <Paragraph $size="12px" className="mb-4 text-dark-grey">
                Streamline your documentation and generate culturally informed
                insights and SOAP notes.
              </Paragraph>
              <ButtonStyled className="text-purple bg-purple-op1 border-0">
                Start Tour
              </ButtonStyled>
            </div>
          </Col>
          <Col md={8} lg={6} xs={12}>
            <div
              className="position-relative w-100"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="w-100 bg-light rounded position-relative">
                <video
                  src="/videos/intro.mov"
                  autoPlay
                  loop
                  muted
                  className="w-100 rounded object-fit-cover"
                  style={{ height: "300px" }}
                />
                <div className="shadow position-absolute top-50 start-50 translate-middle">
                  <img src="/images/play-btn.png" alt="Play" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
