import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaAward } from "react-icons/fa";
import { portfolioData } from "../../data/portfolio";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {portfolioData.education.map((edu, idx) => (
        <Col md={10} key={idx}>
          <Card className="education-card-view">
            <Card.Body>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <h3 className="education-degree">
                  <FaGraduationCap className="purple me-2" />
                  {edu.degree}
                </h3>
                <span className="education-period">
                  <FaCalendarAlt className="me-1 purple" /> {edu.period}
                </span>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <h5 className="education-institution mb-1">
                  <FaUniversity className="me-2 purple" />
                  {edu.institution} • <FaMapMarkerAlt className="ms-2 me-1 purple" />
                  {edu.location}
                </h5>
                {edu.cgpa && (
                  <Badge bg="primary" className="edu-cgpa-badge">
                    <FaAward className="me-1" /> CGPA: {edu.cgpa}
                  </Badge>
                )}
              </div>
              <p className="education-desc">{edu.description}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Education;
