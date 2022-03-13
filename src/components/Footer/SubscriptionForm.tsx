import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Form = () => {
  return (
    <Box flex="1">
      <Text fontSize="xl" fontWeight="bold">
        Subscribe to our mailing list
      </Text>
      <InputGroup>
        <Input type="email" placeholder="Enter your email address here" />
        <InputRightAddon as="button" bgColor="white" color="black">
          Subscribe
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default Form;
