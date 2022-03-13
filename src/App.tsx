import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
