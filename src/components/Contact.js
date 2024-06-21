import { Center, Box, HStack, Link } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Center alignItems="top" marginTop="50px" gridGap="60px">
      <Box height="500px">
        <HStack>
          <h3>LinkedIn Profile:</h3>
          <Link
            className="contact-link"
            href="https://www.linkedin.com/in/varalee-chinsomboon-a12a1215b"
            isExternal
            _hover={{ textDecoration: "underline" }} // Apply hover effect directly to Link
          >
            linkedin.com/in/varalee-chinsomboon-a12a1215b
          </Link>
        </HStack>
        <HStack>
          <h3>Email:</h3>
          <Link
            className="contact-link"
            href="mailto:varalee.c7@gmail.com"
            isExternal
            _hover={{ textDecoration: "underline" }} // Apply hover effect directly to Link
          >
            varalee.c7@gmail.com
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default Contact;
