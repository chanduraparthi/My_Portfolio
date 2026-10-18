import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { portfolioData } from "../../data/portfolio";
import {
  FaCertificate,
  FaTrophy,
  FaExternalLinkAlt,
  FaAward,
  FaCode,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaIdCard,
  FaClock,
  FaLaptopCode,
  FaEye,
  FaRobot,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { SiSap, SiReact } from "react-icons/si";

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCertModal, setActiveCertModal] = useState(null);

  const categories = [
    "All",
    "SAP Enterprise",
    "Full Stack & Web",
    "Hackathons & Competitions",
    "Academic & Foundation",
  ];

  const filteredCertifications =
    selectedCategory === "All"
      ? portfolioData.certifications
      : portfolioData.certifications.filter(
          (cert) => cert.category === selectedCategory
        );

  const getCertIcon = (iconType) => {
    switch (iconType) {
      case "sap":
        return <SiSap className="cert-type-icon purple" />;
      case "react":
        return <SiReact className="cert-type-icon purple" />;
      case "ai":
        return <FaRobot className="cert-type-icon purple" />;
      case "trophy":
        return <FaTrophy className="cert-type-icon purple" />;
      case "web":
        return <FaLaptopCode className="cert-type-icon purple" />;
      case "datascience":
        return <FaGraduationCap className="cert-type-icon purple" />;
      case "code":
        return <FaCode className="cert-type-icon purple" />;
      default:
        return <FaCertificate className="cert-type-icon purple" />;
    }
  };

  return (
    <Container fluid className="project-section cert-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certifications & <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Officially verified credentials in SAP ABAP Cloud, MERN Full Stack Development, Data Science, and Problem Solving.
        </p>

        {/* Highlight Stats Row */}
        <Row className="justify-content-center my-4">
          {portfolioData.achievements.map((item, idx) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={idx}>
              <div className="achievement-stat-card">
                <div className="achievement-icon-wrapper">
                  {item.iconType === "sap" && <SiSap className="achievement-icon purple" />}
                  {item.iconType === "react" && <SiReact className="achievement-icon purple" />}
                  {item.iconType === "ai" && <FaRobot className="achievement-icon purple" />}
                  {item.iconType === "trophy" && <FaTrophy className="achievement-icon purple" />}
                  {item.iconType === "code" && <FaCode className="achievement-icon purple" />}
                  {item.iconType === "award" && <FaAward className="achievement-icon purple" />}
                  {!item.iconType && <FaTrophy className="achievement-icon purple" />}
                </div>
                <h4 className="achievement-metric">{item.metric}</h4>
                <h5 className="achievement-title">{item.title}</h5>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Category Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-5 mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "primary" : "outline-light"}
              size="sm"
              className={`filter-pill-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Certifications Grid */}
        <h2 className="section-subheading mb-4">
          Verified <strong className="purple">Credentials</strong> & Milestones
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {filteredCertifications.map((cert, index) => (
            <Col lg={6} md={12} className="mb-4" key={index}>
              <Card
                className={`cert-card-view ${
                  cert.featured ? "cert-card-featured" : ""
                }`}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    {/* Header: Badge + Category + Verification Tag */}
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                      <div>
                        <span className="cert-badge me-2">{cert.badgeText}</span>
                        <span className="cert-category text-muted">
                          {cert.category}
                        </span>
                      </div>
                      <span className="cert-verified-tag">
                        <FaCheckCircle className="me-1 text-success" />
                        {cert.verificationType || "Verified"}
                      </span>
                    </div>

                    {/* Title with Tech Icon */}
                    <div className="d-flex align-items-start mb-2">
                      <div className="cert-header-icon-box me-3 mt-1">
                        {getCertIcon(cert.iconType)}
                      </div>
                      <div>
                        <h3 className="cert-title mb-1">{cert.title}</h3>
                        <h6 className="cert-issuer">
                          <FaAward className="me-2 purple" />
                          {cert.issuer}
                        </h6>
                      </div>
                    </div>

                    {/* Dates & Certificate ID metadata row */}
                    <div className="cert-meta-container my-2">
                      <span className="cert-meta-item">
                        <FaCalendarAlt className="me-1 purple" />
                        Issued: <strong>{cert.issueDate}</strong>
                      </span>
                      {cert.expiryDate && (
                        <span className="cert-meta-item ms-3">
                          <FaClock className="me-1 text-info" />
                          Valid Thru: <strong>{cert.expiryDate}</strong>
                        </span>
                      )}
                      {cert.certId && (
                        <div className="cert-id-tag mt-2">
                          <FaIdCard className="me-1 purple" />
                          <span>ID: </span>
                          <code>{cert.certId}</code>
                        </div>
                      )}
                    </div>

                    {/* Visual Certificate Preview if Uploaded */}
                    {cert.image && (
                      <div
                        className="cert-preview-frame my-3"
                        onClick={() => setActiveCertModal(cert)}
                        title="Click to view full certificate"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="cert-preview-img img-fluid"
                        />
                        <div className="cert-preview-overlay">
                          <span className="cert-preview-overlay-btn">
                            <FaEye className="me-1" /> View Official Certificate
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="cert-description mt-3">{cert.description}</p>

                    {/* Skills Badges */}
                    <div className="cert-skills-wrap my-3">
                      {cert.skills.map((skill, sIdx) => (
                        <Badge
                          key={sIdx}
                          bg="dark"
                          className="tech-badge me-2 mb-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Buttons */}
                  <div className="cert-actions mt-3 pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap gap-2">
                    {cert.image && (
                      <Button
                        variant="outline-light"
                        onClick={() => setActiveCertModal(cert)}
                        className="cert-view-modal-btn flex-grow-1"
                      >
                        <FaEye className="me-2 purple" />
                        View Certificate
                      </Button>
                    )}
                    {cert.credentialUrl && (
                      <Button
                        variant="primary"
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-btn flex-grow-1"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        {cert.iconType === "sap"
                          ? "Verify Credly Badge"
                          : cert.category === "Hackathons & Competitions"
                          ? "View on LinkedIn"
                          : "View Credential"}
                      </Button>
                    )}
                    {cert.pdfUrl && (
                      <Button
                        variant="outline-light"
                        href={cert.pdfUrl}
                        target="_blank"
                        download
                        className="cert-download-btn"
                        title="Download official certificate PDF"
                      >
                        <AiOutlineDownload className="me-1" />
                        PDF
                      </Button>
                    )}
                    {!cert.credentialUrl && !cert.image && cert.certId && (
                      <div className="text-center py-2 text-muted small w-100">
                        <FaCheckCircle className="me-1 text-success" />
                        Credential Verified with ID {cert.certId}
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certificate Modal Lightbox */}
      <Modal
        show={!!activeCertModal}
        onHide={() => setActiveCertModal(null)}
        size="lg"
        centered
        contentClassName="cert-modal-content"
      >
        <Modal.Header closeButton closeVariant="white" className="cert-modal-header">
          <Modal.Title className="cert-modal-title">
            <FaAward className="me-2 purple" />
            {activeCertModal?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="cert-modal-body text-center p-3">
          <div className="cert-modal-image-wrap">
            <img
              src={activeCertModal?.image}
              alt={activeCertModal?.title}
              className="img-fluid cert-modal-img"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3 border-top border-secondary border-opacity-25">
            <div className="text-start">
              <p className="mb-0 text-white font-weight-bold">
                Issuer: <span className="purple">{activeCertModal?.issuer}</span>
              </p>
              {activeCertModal?.certId && (
                <small className="text-muted">
                  Certificate ID: <code>{activeCertModal?.certId}</code>
                </small>
              )}
            </div>
            <div className="d-flex gap-2 mt-2 mt-sm-0">
              {activeCertModal?.pdfUrl && (
                <Button
                  variant="outline-light"
                  href={activeCertModal?.pdfUrl}
                  target="_blank"
                  download
                  size="sm"
                  className="cert-download-btn"
                >
                  <AiOutlineDownload className="me-1" /> Download PDF
                </Button>
              )}
              {activeCertModal?.credentialUrl && (
                <Button
                  variant="primary"
                  href={activeCertModal?.credentialUrl}
                  target="_blank"
                  size="sm"
                  className="cert-btn"
                >
                  <FaExternalLinkAlt className="me-1" /> Verify on Credly
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certifications;
