import React from "react";
import { Flex, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import config from "../config";

const Footer = () => {
  const { GITHUB_URL, LINKEDIN_URL } = config;

  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      width="100%"
      p={4}
      bg="gray.200"
      paddingBottom={"60px"}
    >
      <HStack spacing={4}>
        <SocialLink href={GITHUB_URL} icon={<FaGithub size={24} />} />
        <SocialLink href={LINKEDIN_URL} icon={<FaLinkedin size={24} />} />
      </HStack>
    </Flex>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      fontSize="24px"
      _hover={{ textDecoration: "none" }}
    >
      {icon}
    </Link>
  );
};

export default Footer;
