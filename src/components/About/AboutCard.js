import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { portfolioData } from "../../data/portfolio";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">{portfolioData.name}</span> from{" "}
            <span className="purple">{portfolioData.location}</span>.
            <br />
            <br />
            I am a <b className="purple">B.Tech Computer Science student</b> passionate about{" "}
            <b className="purple">Full Stack Development, SAP ABAP, and AI</b>.
            <br />
            <br />
            I build real-world web applications using the <b className="purple">MERN stack</b>,{" "}
            <b className="purple">PHP</b>, and <b className="purple">MySQL</b>. I have earned the official{" "}
            <b className="purple">SAP Certified - Back-End Developer - ABAP Cloud</b> certification and completed an intensive{" "}
            <b className="purple">MERN Full Stack Internship with EduSkills Academy</b>. I have hands-on experience with{" "}
            <b className="purple">ABAP Cloud, Clean Core, SAP S/4HANA, CDS, OData, and RAP</b>, including a{" "}
            <b className="purple">Student Management application developed using the RAP Managed Scenario</b>.
            <br />
            <br />
            I have solved <b className="purple">250+ Data Structures and Algorithms problems using Java</b>, strengthening my problem-solving and programming skills. I also explore{" "}
            <b className="purple">AI, Cloud, DevOps, and CI/CD technologies</b> to build and deploy better applications.
          </p>

          <ul>
            {portfolioData.highlights &&
              portfolioData.highlights.map((highlight) => (
                <li className="about-activity" key={highlight}>
                  <ImPointRight /> {highlight}
                </li>
              ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "{portfolioData.quote}"
          </p>
          <footer className="blockquote-footer">{portfolioData.shortName}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

