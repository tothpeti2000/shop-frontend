import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import ProductList from "./components/ProductList/ProductList";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    {/*<ProductList />*/}
    <NavBar />
    <Home />
  </ChakraProvider>
);
