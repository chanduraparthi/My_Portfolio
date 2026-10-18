import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
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
  SiSap,
} from "react-icons/si";
import { FaAws, FaDatabase, FaJava, FaCode } from "react-icons/fa";
import { portfolioData } from "../../data/portfolio";

const skillIcons = {
  "SAP ABAP": <SiSap fontSize={"28px"} />,
  "SAP S/4HANA": <SiSap fontSize={"28px"} />,
  "RAP & CDS": <FaCode fontSize={"28px"} />,
  OData: <FaCode fontSize={"28px"} />,
  HTML: <SiHtml5 fontSize={"28px"} />,
  CSS: <SiCss3 fontSize={"28px"} />,
  JavaScript: <SiJavascript fontSize={"28px"} />,
  React: <SiReact fontSize={"28px"} />,
  "Node.js": <SiNodedotjs fontSize={"28px"} />,
  "Express.js": <SiExpress fontSize={"28px"} />,
  MongoDB: <SiMongodb fontSize={"28px"} />,
  SQL: <FaDatabase fontSize={"28px"} />,
  PHP: <SiPhp fontSize={"28px"} />,
  Java: <FaJava fontSize={"28px"} />,
  Python: <SiPython fontSize={"28px"} />,
  Git: <SiGit fontSize={"28px"} />,
  "GitHub Actions": <SiGithubactions fontSize={"28px"} />,
  Docker: <SiDocker fontSize={"28px"} />,
  Linux: <SiLinux fontSize={"28px"} />,
  AWS: <FaAws fontSize={"28px"} />,
};

function Techstack() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "SAP & Enterprise",
    "Core Languages",
    "Frontend",
    "Backend & Databases",
    "Cloud & DevOps",
  ];

  const categoryMap = {
    "SAP & Enterprise": ["SAP ABAP", "SAP S/4HANA", "RAP & CDS"],
    "Core Languages": ["Java", "JavaScript", "Python", "PHP", "SQL"],
    Frontend: ["React", "HTML", "CSS"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "SQL", "PHP"],
    "Cloud & DevOps": ["Git", "GitHub Actions", "Docker", "Linux", "AWS"],
  };

  const displayedSkills =
    selectedCategory === "All"
      ? portfolioData.skills
      : categoryMap[selectedCategory] || portfolioData.skills;

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "primary" : "outline-light"}
            size="sm"
            className={`filter-pill-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {displayedSkills.map((skill) => (
          <Col xs={6} sm={4} md={2} className="tech-icons" key={skill}>
            {skillIcons[skill] || <FaCode fontSize={"28px"} />}
            <div className="tech-icons-text">{skill}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
