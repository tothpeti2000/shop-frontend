import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBrand = () => {
  return (
    <Link to="/">
      <Flex align="center">
        <Logo />
        Awesome Sneakers
      </Flex>
    </Link>
  );
};

export default NavBrand;
