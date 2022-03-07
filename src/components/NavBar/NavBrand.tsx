import { Flex } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";

const NavBrand = () => {
  return (
    <Flex align="center">
      <Logo />
      Awesome Sneakers
    </Flex>
    /*<Link to="/">
      <Flex align="center">
        <Logo />
        Awesome Sneakers
      </Flex>
  </Link>*/
  );
};

export default NavBrand;
