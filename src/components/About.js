import React from "react";
import { Flex, VStack, Heading, Text, HStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex direction="column" align="center" mt="50px" gridGap="40px">
      <VStack align="center" maxWidth="800px" textAlign="center">
        <Heading as="h1" size="xl">
          Varalee Chinsomboon
        </Heading>
        <Heading as="h2" size="md">
          Software Engineer / Data Analyst
        </Heading>
        <Text as="p" width="550px" textAlign="justify" maxWidth="800px">
          Hey there, I'm Varalee Chinsomboon, a full stack developer with a
          background in physics and biology from the University of British
          Columbia. I began my journey at BC Cancer Research Center, where I
          immersed myself in programming and data analytics.
        </Text>
        <Text as="p" width="550px" textAlign="justify" maxWidth="800px">
          Transitioning to the mobile game industry, I thrived as a Software
          Engineer, specializing in full stack web application design and
          development. My expertise includes crafting robust web solutions,
          managing SQL databases, and navigating backend complexities. My
          dedication lies in delivering high-quality, user-centric products.
        </Text>
        <Text as="p" width="550px" textAlign="justify" maxWidth="800px">
          I'm passionate about applying my diverse expertise to create impactful
          and user-friendly data-driven solutions. Be sure to check out the
          projects section to see some of my work.
        </Text>
      </VStack>

      <HStack
        paddingTop="40px"
        spacing="40px"
        maxWidth="800px"
        width="100%"
        justifyContent="center"
        alignItems="start"
      >
        <VStack align="center" textAlign="left">
          <Heading as="h3" size="md" mb="2">
            Key Skills
          </Heading>
          <Text as="ul" width="100%" textAlign="left">
            <li>Data Analytics</li>
            <li>Full Stack Web Development</li>
            <li>SQL Database Management</li>
            <li>Python Scripting</li>
          </Text>
        </VStack>
        <VStack align="center" textAlign="left">
          <Heading as="h3" size="md" mb="2">
            Certifications
          </Heading>
          <Text as="ul" width="100%" textAlign="left">
            <li>AWS Certified Cloud Practitioner</li>
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default About;
