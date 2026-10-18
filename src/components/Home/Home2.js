import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { FaQuoteLeft } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import { portfolioData } from "../../data/portfolio";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              KNOW WHO <span className="purple">I AM</span>
            </h1>
            <div className="home-about-body">
              <p>
                Hi, I am <span className="purple">{portfolioData.name}</span> from{" "}
                <span className="purple">{portfolioData.location}</span>.
              </p>
              <p>
                I am a <b className="purple">B.Tech Computer Science student</b> passionate about{" "}
                <b className="purple">Full Stack Development, SAP ABAP, and AI</b>.
              </p>
              <p>
                I build real-world web applications using the <b className="purple">MERN stack</b>,{" "}
                <b className="purple">PHP</b>, and <b className="purple">MySQL</b>. I have earned the official{" "}
                <b className="purple">SAP Certified - Back-End Developer - ABAP Cloud</b> certification and completed an 8-week{" "}
                <b className="purple">MERN Full Stack Internship with EduSkills Academy</b>. I have hands-on experience with{" "}
                <b className="purple">ABAP Cloud, Clean Core, SAP S/4HANA, CDS, OData, and RAP</b>, including a{" "}
                <b className="purple">Student Management application developed using the RAP Managed Scenario</b>.
              </p>
              <p>
                I have solved <b className="purple">250+ Data Structures and Algorithms problems using Java</b>,
                strengthening my problem-solving and programming skills. I also explore{" "}
                <b className="purple">AI, Cloud, DevOps, and CI/CD technologies</b> to build and deploy better applications.
              </p>

              <div className="home-highlights-container">
                <ul className="home-highlights-list">
                  {portfolioData.highlights &&
                    portfolioData.highlights.map((highlight) => (
                      <li className="home-highlight-item" key={highlight}>
                        <ImPointRight className="purple highlight-icon" /> {highlight}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="home-quote-box">
                <FaQuoteLeft className="quote-icon" />
                <p className="home-quote-text">"{portfolioData.quote}"</p>
                <span className="home-quote-author">— {portfolioData.shortName}</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

