import { Flex } from "@chakra-ui/layout";
import React from "react";
import LoginButton from "./LoginButton";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  return (
    <Flex align="center">
      <SearchBar />
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About AS</NavItem>
      <LoginButton />
      {/*<Cart />*/}
    </Flex>
    /*<Link to="/">
    <NavItem>Home</NavItem>
  </Link>
  <Link to="/products">
    <NavItem>Shop</NavItem>
  </Link>
  <Link to="/">
    <NavItem>About AS</NavItem>
  </Link>*/
  );
};

export default NavLinks;
