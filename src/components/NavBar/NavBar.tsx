import { Spacer } from "@chakra-ui/layout";
import React from "react";
import NavBarContainer from "./NavBarContainer";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBrand />
      <Spacer />
      <NavLinks />
    </NavBarContainer>
  );
};

export default NavBar;
