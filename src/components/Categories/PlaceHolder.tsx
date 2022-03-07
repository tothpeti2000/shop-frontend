import { Circle, Heading } from "@chakra-ui/react";
import React from "react";

const PlaceHolder = () => {
  return (
    <Circle
      size="300px"
      bg="white"
      color="black"
      boxShadow="dark-lg"
      m="auto"
      mb={5}
    >
      <Heading>Image</Heading>
    </Circle>
  );
};

export default PlaceHolder;
