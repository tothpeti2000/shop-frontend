import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
  return (
    <IconButton
      aria-label="Login"
      icon={<Icon as={FaUserCircle} boxSize="80%" />}
      colorScheme="black"
      mx={5}
    />
  );
};

export default LoginButton;
