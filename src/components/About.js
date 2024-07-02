import React, { useEffect, useState } from "react";
import { VStack, Heading, Text, HStack, Box } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <PageContainer>
      <Box
        p={6} // Padding
        maxWidth={{ base: "100%", md: "800px" }} // Adjusts max width based on screen size
        margin="0 auto" // Centers the box horizontally
        borderRadius="lg" // Rounded corners
        boxShadow="lg" // Adds shadow for depth
        bg="rgba(255, 255, 255, 0.9)" // Transparent white background
        className={`about-content ${animate ? "animate" : ""}`}
      >
        <VStack align="center" textAlign="center" spacing={6}>
          <Heading as="h1" size="xl">
            Varalee Chinsomboon
          </Heading>
          <Heading as="h2" size="md">
            Software Engineer / Data Analyst
          </Heading>
          <Text paddingTop="20px" width="55%" textAlign="left">
            Hello, I'm Varalee Chinsomboon, a full-stack developer with a
            background in physics and biology from the University of British
            Columbia. My journey began at the BC Cancer Research Center, where
            I delved into programming and data analytics.
          </Text>
          <Text width="55%" textAlign="left">
            Transitioning into the mobile game industry, I excelled as a
            Software Engineer, specializing in full-stack web application
            design and development. I take pride in crafting robust web
            solutions, managing SQL databases, and navigating backend
            complexities to deliver high-quality, user-centric products.
          </Text>
          <Text width="55%" textAlign="left">
            I'm passionate about leveraging my diverse expertise to create
            impactful and user-friendly data-driven solutions. Explore the
            projects section to see some of my work.
          </Text>
        </VStack>

        <HStack
          marginTop="40px"
          spacing={{ base: 4, md: 10 }} // Adjust spacing based on screen size
          maxWidth="100%"
          justifyContent="center"
          alignItems="start"
        >
          <VStack align="center" textAlign="left">
            <Heading as="h3" size="md" marginBottom="2">
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
            <Heading as="h3" size="md" marginBottom="2">
              Certifications
            </Heading>
            <Text as="ul" width="100%" textAlign="left">
              <li>AWS Certified Cloud Practitioner</li>
            </Text>
          </VStack>
        </HStack>
      </Box>
    </PageContainer>
  );
};

export default About;
