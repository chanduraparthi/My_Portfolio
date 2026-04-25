import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <span className="purple">{portfolioData.name}</span> from{" "}
              <span className="purple">{portfolioData.location}</span>.
              <br />
              <br />
              {portfolioData.heroDescription}
              <br />
              <br />
              {portfolioData.introParagraphs[0]}
              <br />
              <br />
              {portfolioData.introParagraphs[1]}
              <br />
              <br />
              {portfolioData.introParagraphs[2]}
            </p>
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
