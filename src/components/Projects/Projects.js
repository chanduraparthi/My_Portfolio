import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { portfolioData } from "../../data/portfolio";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have built while learning full-stack web development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {portfolioData.projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
