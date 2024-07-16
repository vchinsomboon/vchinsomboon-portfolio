import "./Project.css";
import config from "../../config.js";
import { useEffect, useState } from "react";
import PageContainer from "../PageContainer.js";
import { Flex } from "@chakra-ui/react";
import Project1Article from "./Project1Article.js";
import Project1Notebook from "./Project1Notebook.js";
import Project1Tool from "./Project1Tool.js";

const Project1 = () => {
  const { PROJECTS } = config;
  const project = PROJECTS.find((project) => project.id === "Project1");

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "tab1"
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
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
              Article
            </div>
            <div
              className={`tab ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => handleTabClick("tab3")}
            >
              Jupyter Notebook
            </div>
            <div
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Interactive Tool
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "tab1" && (
              <div className="content">
                <div className="project-1-container">
                  <Project1Article />
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="content">
                <div className="data-container">
                  <Project1Tool />
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="content">
                <div className="project-1-container">
                  <Project1Notebook />
                </div>
              </div>
            )}
          </div>
        </div>
      </Flex>
    </PageContainer>
  );
};

export default Project1;
