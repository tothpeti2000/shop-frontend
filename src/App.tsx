import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./pages/Home";
import Products from "./pages/Products";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  </ChakraProvider>
);
