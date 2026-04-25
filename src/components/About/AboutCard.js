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
            I am currently a <span className="purple">B.Tech student</span> with
            a strong interest in <span className="purple">full stack development</span>
            {" "}and <span className="purple">AI-based applications</span>.
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

          <ul>
            {portfolioData.interests.map((interest) => (
              <li className="about-activity" key={interest}>
                <ImPointRight /> {interest}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"{portfolioData.quote}"</p>
          <footer className="blockquote-footer">{portfolioData.shortName}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
