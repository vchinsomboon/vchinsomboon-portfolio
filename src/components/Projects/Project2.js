import React, { useEffect } from "react";
import "./Project.css";
import config from "../../config.js";
import PageContainer from "../PageContainer.js";
import { Flex } from "@chakra-ui/react";
import Tableau from "./Tableau.js";

const Project2 = () => {
  const { PROJECTS } = config;
  const project = PROJECTS.find((project) => project.id === "Project2");

  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              Cirrhosis EDA
            </div>
            <div
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Tab 2
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "tab1" && (
              <div className="content">
                <h3>Cirrhosis Exploratory Data Analysis</h3>
                <Tableau />
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="content">
                <h2>Tab 2</h2>
              </div>
            )}
          </div>
        </div>
      </Flex>
    </PageContainer>
  );
};

export default Project2;
