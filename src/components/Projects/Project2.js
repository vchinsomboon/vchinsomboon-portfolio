import React, { useEffect, useState } from "react";
import "./Tableau.css";
import config from "../../config.js";
import PageContainer from "../PageContainer.js";
import { Flex, Grid } from "@chakra-ui/react";
import Tableau from "./Tableau";
import TableauSheets from "./TableauSheets";
import tableauConfig from "./tableauConfig";

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
            {activeTab === "tab1" && (
              <div className="content">
                <h3>Cirrhosis Exploratory Data Analysis Dashboard</h3>
                <Tableau url={tableauConfig.CIRRHOSIS_PROJECT.dashboardUrl} />
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="content">
                <h3>Tableau Sheets</h3>
                <Grid templateColumns="repeat(1, 1fr)" gap={100} mt="20px">
                  {tableauConfig.CIRRHOSIS_PROJECT.sheets.map(
                    (sheet, index) => (
                      <div key={index} className="tableau-sheet">
                        <TableauSheets url={sheet.sheetUrl} />
                        <div className="sheet-description">
                          <h4>{sheet.title}</h4>
                          <p>{sheet.description}</p>
                          {sheet.dataSummary && (
                            <div className="data-summary">
                              <h5>Data Summary:</h5>
                              <ul>
                                {Object.entries(sheet.dataSummary).map(
                                  ([key, value], i) => (
                                    <li key={i}>
                                      <strong>{key}:</strong> {value}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </Grid>
              </div>
            )}
          </div>
        </div>
      </Flex>
    </PageContainer>
  );
};

export default Project2;
