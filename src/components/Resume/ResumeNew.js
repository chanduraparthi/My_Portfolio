import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "../../Assets/chandu_Resume_new.pdf";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={8}>
            <Card className="project-card-view resume-card">
              <Card.Body>
                <h1 className="project-heading" style={{ paddingTop: 0 }}>
                  My <strong className="purple">Resume</strong>
                </h1>
                <p className="resume-copy">
                  You can preview my latest resume below or download the PDF
                  directly.
                </p>
                <div className="resume-actions">
                  <Button variant="primary" href={resumePdf} target="_blank">
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="resume">
          <Col lg={10}>
            <Card className="project-card-view resume-preview-card">
              <Card.Body>
                <iframe
                  title="Chandu Resume"
                  src={resumePdf}
                  className="resume-frame"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
