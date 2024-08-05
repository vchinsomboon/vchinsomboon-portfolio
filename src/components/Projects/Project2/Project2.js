import React, { useEffect, useState } from "react";
import "../Tableau.css";
import config from "../../../config.js";
import PageContainer from "../../PageContainer.js";
import { Flex, Grid } from "@chakra-ui/react";
import Project2Dashboard from "./Project2Dashboard.js";
import Project2Sheets from "./Project2Sheets.js";

const Project2 = () => {
  const { PROJECTS } = config;
  const project = PROJECTS.find((project) => project.id === "Project2");

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTabProject2") || "tab1"
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTabProject2", tab);
  };

  return (
    <PageContainer>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <Flex direction="column" align="center" mt="50px" gridGap="60px">
        <div className="projects-container">
          <div className="tab-list">
            <div
              className={`tab ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              Cirrhosis Dashboard
            </div>
            <div
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Cirrhosis Sheets
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "tab1" && <Project2Dashboard />}
            {activeTab === "tab2" && <Project2Sheets />}
          </div>
        </div>
      </Flex>
    </PageContainer>
  );
};

export default Project2;
