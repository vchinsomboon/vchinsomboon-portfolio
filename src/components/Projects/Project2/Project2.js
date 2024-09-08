import React, { useEffect, useState } from "react";
import "../Tableau.css";
import config from "../../../config.js";
import PageContainer from "../../PageContainer.js";
import { Flex } from "@chakra-ui/react";
import Project2Dashboard from "./Project2Dashboard.js";
import Project2Sheets from "./Project2Sheets.js";
import Project2VehicleDashboard from "./Project2VehicleDashboard.js";
import Project2VendingDashboard from "./Project2VendingDashboard.js";

const Project2 = () => {
  const { PROJECTS } = config;
  const project = PROJECTS.find((project) => project.id === "Project2");

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTabProject2") || "tab1"
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTabProject2", tab);
    window.location.reload(); // Refresh the whole page on tab change
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
              Vending Machine Sales Dashboard
            </div>
            <div
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              California Vehicle Dashboard
            </div>
            <div
              className={`tab ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => handleTabClick("tab3")}
            >
              Cirrhosis Dashboard
            </div>
            <div
              className={`tab ${activeTab === "tab4" ? "active" : ""}`}
              onClick={() => handleTabClick("tab4")}
            >
              Cirrhosis Sheet Analysis
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "tab1" && <Project2VendingDashboard />}
            {activeTab === "tab2" && <Project2VehicleDashboard />}
            {activeTab === "tab3" && <Project2Dashboard />}
            {activeTab === "tab4" && <Project2Sheets />}
          </div>
        </div>
      </Flex>
    </PageContainer>
  );
};

export default Project2;
