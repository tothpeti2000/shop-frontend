import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthButton = () => {
  return (
    <Link to={"/login"}>
      <IconButton
        aria-label="Login"
        icon={<Icon as={FaUserCircle} boxSize="80%" />}
        colorScheme="yellow"
        mx={5}
      />
    </Link>
  );
};

export default AuthButton;
