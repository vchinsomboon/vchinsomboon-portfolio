import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Project1 from "./Projects/Project1/Project1";
import Project2 from "./Projects/Project2/Project2"; // Import Project2 component
import logo from "../assets/VCLogo.png";
import config from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Flex } from "@chakra-ui/react";

const { GITHUB_URL, LINKEDIN_URL, EMAIL_URL, PROJECTS } = config;

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
        <Navbar.Brand href="/vchinsomboon-portfolio">
          <img
            src={logo}
            width="120"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "start", lg: "center" }}
            w="100%"
          >
            <Nav className="mr-auto" width="auto">
              <LinkContainer to="/about" onClick={handleNavClick}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Projects"
                id="basic-nav-dropdown"
                className="custom-dropdown"
              >
                {PROJECTS.map((project) => (
                  <LinkContainer
                    key={project.id}
                    to={`/projects/${project.id}`}
                    onClick={handleNavClick}
                  >
                    <NavDropdown.Item>{project.title}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
              <Nav.Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <FaGithub size={30} />
              </Nav.Link>
              <Nav.Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <FaLinkedin size={30} />
              </Nav.Link>
              <Nav.Link
                href={`mailto:${EMAIL_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <FaEnvelope size={30} />
              </Nav.Link>
            </Nav>
          </Flex>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        {PROJECTS.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={
              project.id === "Project1" ? (
                <Project1 />
              ) : project.id === "Project2" ? (
                <Project2 />
              ) : null
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default NavBar;
