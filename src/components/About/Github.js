import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import { portfolioData } from "../../data/portfolio";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Contributions</strong>
      </h1>
      <GitHubCalendar
        username={portfolioData.githubUsername}
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
