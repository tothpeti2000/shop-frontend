import { Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Details from "./Details";
import Social from "./Social";
import Form from "./SubscriptionForm";

const Footer = () => {
  return (
    <Flex
      direction="column"
      h="350px"
      align="center"
      justify="space-around"
      bgGradient="linear(to-b, gray.900, black)"
      color="white"
    >
      <Heading fontSize={80}>Logo</Heading>
      <Flex w="80%">
        <Details />
        <Social />
        <Form />
      </Flex>
      <Text>Awesome Sneakers</Text>
    </Flex>
  );
};

export default Footer;
