import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../api/useLogin";
import Cart from "../Cart/Cart";
import AuthButton from "./AuthButton";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  const { IsLoggedIn } = useLogin();

  return (
    <Flex align="center">
      <SearchBar />
      <Link to="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/products">
        <NavItem>Shop</NavItem>
      </Link>
      <Link to="/about">
        <NavItem>About AS</NavItem>
      </Link>
      <AuthButton />
      {IsLoggedIn() && <Cart />}
    </Flex>
  );
};

export default NavLinks;
