import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaChrome, FaFigma, FaGithub } from "react-icons/fa";
import { SiGit, SiPostman, SiVisualstudiocode, SiEclipseide } from "react-icons/si";
import { portfolioData } from "../../data/portfolio";

const toolIcons = {
  "VS Code": <SiVisualstudiocode fontSize={"24px"} />,
  Git: <SiGit fontSize={"24px"} />,
  GitHub: <FaGithub fontSize={"24px"} />,
  Postman: <SiPostman fontSize={"24px"} />,
  Figma: <FaFigma fontSize={"24px"} />,
  Eclipse: <SiEclipseide fontSize={"24px"} />,
  "Chrome DevTools": <FaChrome fontSize={"24px"} />,
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {portfolioData.tools.map((tool) => (
        <Col xs={12} md={3} className="tech-icons" key={tool}>
          {toolIcons[tool]}
          <div className="tech-icons-text">{tool}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
