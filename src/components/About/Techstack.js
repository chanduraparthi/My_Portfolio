import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiGit,
} from "react-icons/si";
import { FaAws, FaDatabase, FaJava } from "react-icons/fa";
import { portfolioData } from "../../data/portfolio";

const skillIcons = {
  HTML: <SiHtml5 fontSize={"24px"} />,
  CSS: <SiCss3 fontSize={"24px"} />,
  JavaScript: <SiJavascript fontSize={"24px"} />,
  React: <SiReact fontSize={"24px"} />,
  "Node.js": <SiNodedotjs fontSize={"24px"} />,
  "Express.js": <SiExpress fontSize={"24px"} />,
  MongoDB: <SiMongodb fontSize={"24px"} />,
  SQL: <FaDatabase fontSize={"24px"} />,
  PHP: <SiPhp fontSize={"24px"} />,
  Java: <FaJava fontSize={"24px"} />,
  Python: <SiPython fontSize={"24px"} />,
  Git: <SiGit fontSize={"24px"} />,
  "GitHub Actions": <SiGithubactions fontSize={"24px"} />,
  Docker: <SiDocker fontSize={"24px"} />,
  Linux: <SiLinux fontSize={"24px"} />,
  AWS: <FaAws fontSize={"24px"} />,
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {portfolioData.skills.map((skill) => (
        <Col xs={12} md={3} className="tech-icons" key={skill}>
          {skillIcons[skill]}
          <div className="tech-icons-text">{skill}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
