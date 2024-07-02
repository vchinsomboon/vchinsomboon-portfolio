import './Project.css';
import config from '../../config.js';
import { useEffect, useState } from 'react';
import PageContainer from "../PageContainer.js"; // Import your PageContainer component
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Project2 = () => {
    const { PROJECTS } = config;
    const project = PROJECTS.find(project => project.id === 'Project2');

    const [data, setData] = useState(null);

    const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/api/data`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
                            Tab 1
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
                                <div className="project-1-container">
                                    <h3>Data from Flask Backend</h3>
                                    {data ? <p>{data.message}</p> : <p>Loading...</p>}
                                </div>
                            </div>
                        )}
                        {activeTab === "tab2" && (
                            <div className="content">
                                <h2>Tab 2 content</h2>
                                <p>Content for Tab 2 goes here...</p>
                            </div>
                        )}
                    </div>
                </div>
            </Flex>
        </PageContainer>
    );
};

export default Project2;
