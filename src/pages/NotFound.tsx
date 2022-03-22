import { Flex, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Heading>404</Heading>
      <Text>Page not found</Text>
    </Flex>
  );
};

export default NotFound;
