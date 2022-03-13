import { Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";

const PlaceHolder = () => {
  return (
    <Circle size="300px" overflow={"clip"} boxShadow="dark-lg" mx="auto" mb={5}>
      <Image src="https://via.placeholder.com/300" />
    </Circle>
  );
};

export default PlaceHolder;
