import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} className="project-img" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-card-title">{props.title}</Card.Title>

        {/* Technologies used */}
        {props.technologies && props.technologies.length > 0 && (
          <div className="project-tech-badges mb-3">
            {props.technologies.map((tech, idx) => (
              <Badge key={idx} bg="dark" className="tech-badge me-1 mb-1">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text className="project-card-text flex-grow-1" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="project-card-actions mt-auto pt-3">
          <Button variant="primary" href={props.ghLink} target="_blank" className="action-btn me-2">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              className="action-btn"
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
