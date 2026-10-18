import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import resumePdf from "../../Assets/chandu_Resume_new.pdf";
import resumePreview from "../../Assets/chandu_resume_preview.png";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Header Action Card */}
        <Row style={{ justifyContent: "center" }}>
          <Col lg={9}>
            <Card className="project-card-view resume-card text-center mb-4">
              <Card.Body className="py-4">
                <h1 className="project-heading" style={{ paddingTop: 0 }}>
                  My <strong className="purple">Resume</strong>
                </h1>
                <p className="resume-copy">
                  Full Stack Developer & SAP ABAP Cloud Certified Engineer. You can preview my verified resume below or download the PDF directly.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  <Button
                    variant="primary"
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    download="Chandu_Raparthi_Resume.pdf"
                    className="resume-download-btn px-4 py-2"
                  >
                    <AiOutlineDownload className="me-2" />
                    Download Resume (PDF)
                  </Button>
                  <Button
                    variant="outline-light"
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-view-btn px-4 py-2"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Open PDF in New Tab
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* High-Resolution Document Display */}
        <Row className="justify-content-center">
          <Col lg={9} md={11}>
            <div className="resume-preview-container">
              <div className="resume-paper-frame">
                <div className="resume-paper-header d-flex justify-content-between align-items-center mb-2 px-2">
                  <span className="text-muted small">
                    <FaFilePdf className="me-1 purple" /> Chandu Raparthi — Full Stack Developer Resume
                  </span>
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="small purple text-decoration-none"
                  >
                    <FaExternalLinkAlt className="me-1" /> View Fullscreen
                  </a>
                </div>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  title="Click to view full PDF in new tab"
                >
                  <img
                    src={resumePreview}
                    alt="Chandu Raparthi Resume"
                    className="resume-preview-image img-fluid"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center" }} className="mt-4 mb-5">
          <Col lg={6} className="text-center">
            <Button
              variant="primary"
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              download="Chandu_Raparthi_Resume.pdf"
              className="resume-download-btn px-4 py-2"
            >
              <AiOutlineDownload className="me-2" />
              Download Resume (PDF)
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
