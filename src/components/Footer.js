import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by {portfolioData.name}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright {year} {portfolioData.shortName}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {portfolioData.socialLinks.map((link) => (
              <li className="social-icons" key={link.label}>
                <a
                  href={link.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.label === "GitHub" && <AiFillGithub />}
                  {link.label === "LinkedIn" && <FaLinkedinIn />}
                  {link.label === "Instagram" && <AiFillInstagram />}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
