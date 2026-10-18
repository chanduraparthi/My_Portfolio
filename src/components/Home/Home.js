import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaAward, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import { portfolioData } from "../../data/portfolio";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> {portfolioData.name}</strong>
              </h1>

              <div style={{ padding: "20px 45px 15px 45px", textAlign: "left" }}>
                <Type />
              </div>

              <p className="home-headline">{portfolioData.headline}</p>
              <p className="home-hero-copy">{portfolioData.heroDescription}</p>

              {/* Call to action buttons */}
              <div className="home-cta-buttons">
                <Button
                  as={Link}
                  to="/project"
                  className="home-cta-btn primary-cta me-3 mb-2"
                >
                  <AiOutlineFundProjectionScreen className="me-2" />
                  View Projects
                </Button>
                <Button
                  as={Link}
                  to="/certifications"
                  className="home-cta-btn secondary-cta me-3 mb-2"
                >
                  <FaAward className="me-2" />
                  Certifications
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  className="home-cta-btn outline-cta mb-2"
                >
                  <AiOutlineMail className="me-2" />
                  Get In Touch
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="text-center">
              <img
                src={homeLogo}
                alt="portfolio hero"
                className="img-fluid hero-floating-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          {/* Key Metric Stats Row on Hero */}
          <Row className="hero-stats-row mt-5 justify-content-center">
            {portfolioData.stats &&
              portfolioData.stats.map((stat, idx) => (
                <Col xs={6} md={3} className="mb-3" key={idx}>
                  <div className="hero-stat-box">
                    <h3 className="hero-stat-value purple">{stat.value}</h3>
                    <h5 className="hero-stat-label">{stat.label}</h5>
                    <span className="hero-stat-subtext">{stat.subtext}</span>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              {portfolioData.socialLinks.map((link) => (
                <li className="social-icons" key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
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
    </section>
  );
}

export default Home;
