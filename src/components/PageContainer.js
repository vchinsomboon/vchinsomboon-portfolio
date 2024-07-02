// components/PageContainer.js
import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react"; // Import from your UI library

const PageContainer = ({ children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      mt="80px" /* Adjust the top margin to match the height of your navbar */
      className="page-container"
    >
      {children}
    </Flex>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
