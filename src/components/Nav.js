import { HStack, Box, Link, VStack } from "@chakra-ui/react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import logo from "../assets/VCLogo.png";
import ProjectsLanding from "./ProjectsLanding";

const Nav = () => {
  return (
    <nav className="Nav">
      <VStack align="center" spacing={4}>
        <img src={logo} alt="logo" width="250" />
        <HStack as="ul" listStyleType="none" spacing={4} padding={"inherit"}>
          <NavItem to="/about" className="nav-item">
            About
          </NavItem>
          <NavItem to="/projects" className="nav-item">
            Projects
          </NavItem>
          <NavItem to="/contact" className="nav-item">
            Contact
          </NavItem>
        </HStack>
      </VStack>

      <Routes>
        {/* Specify the default route to render Home */}
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsLanding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </nav>
  );
};

const NavItem = ({ to, children, className }) => {
  return (
    <Box as="li" className={className}>
      <Link
        as={RouterLink}
        to={to}
        p={2}
        rounded="md"
        _hover={{ bg: "gray.200" }}
        _active={{ bg: "gray.300" }}
      >
        {children}
      </Link>
    </Box>
  );
};

export default Nav;
