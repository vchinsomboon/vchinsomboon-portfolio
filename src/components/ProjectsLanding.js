import React, { useState } from "react";
import "./ProjectsLanding.css";
import "./Project1/Project1";
import Project1 from "./Project1/Project1";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const ProjectsLanding = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Flex direction="column" align="center" mt="50px" gridGap="60px">
      <div className="projects-landing-container">
        <div className="tab-list">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div className="content">
              <Project1 />
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="content">
              <h2>Projects for Tab 2</h2>
              <p>Content for Tab 2 goes here...</p>
            </div>
          )}
          {activeTab === "tab3" && (
            <div className="content">
              <h2>Projects for Tab 3</h2>
              <p>Content for Tab 3 goes here...</p>
            </div>
          )}
        </div>
      </div>
    </Flex>
  );
};

export default ProjectsLanding;
