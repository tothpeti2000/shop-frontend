import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

export const App = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);
