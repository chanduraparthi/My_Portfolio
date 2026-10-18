import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { portfolioData } from "../../data/portfolio";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client with prefilled details
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <Container fluid className="project-section contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a project in mind, an opportunity, or want to discuss SAP ABAP & Full Stack development?
        </p>

        <Row className="justify-content-center mt-5">
          {/* Contact Details Column */}
          <Col lg={5} md={12} className="mb-4">
            <Card className="contact-info-card h-100">
              <Card.Body>
                <h3 className="contact-card-title mb-4">Contact Information</h3>
                
                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <AiOutlineMail className="purple" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${portfolioData.email}`} className="contact-value">
                      {portfolioData.email}
                    </a>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-auto copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copied ? <FaCheck className="text-success" /> : <FaCopy />}
                  </Button>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <FaMapMarkerAlt className="purple" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{portfolioData.location}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <FaLinkedinIn className="purple" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">LinkedIn</span>
                    <a
                      href={portfolioData.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-value"
                    >
                      linkedin.com/in/{portfolioData.linkedinUsername || "chandu-raparthi"}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <AiFillGithub className="purple" />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">GitHub</span>
                    <a
                      href={`https://github.com/${portfolioData.githubUsername}`}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-value"
                    >
                      github.com/{portfolioData.githubUsername}
                    </a>
                  </div>
                </div>

                <div className="quick-bio-note mt-4">
                  <p>
                    I am actively seeking software engineering, SAP ABAP development, and full stack developer opportunities. Feel free to connect directly!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Direct Message Form Column */}
          <Col lg={7} md={12} className="mb-4">
            <Card className="contact-form-card h-100">
              <Card.Body>
                <h3 className="contact-card-title mb-4">Send Me a Message</h3>

                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Opening your email client... You can also copy my email directly if your mail client did not launch!
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label className="form-custom-label">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-custom-input"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label className="form-custom-label">Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formSubject" className="mb-3">
                    <Form.Label className="form-custom-label">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      required
                      placeholder="Opportunity / Collaboration Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-custom-input"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label className="form-custom-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      required
                      placeholder="Hi Chandu, I came across your portfolio and would like to connect regarding..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-custom-input"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="contact-submit-btn w-100">
                    <FaPaperPlane className="me-2" /> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
