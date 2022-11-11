import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { CartProvider } from "../context/CartContext";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navBar/NavBar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Box minH="88vh">{children}</Box>
      </CartProvider>
      <Footer />
    </>
  );
};

export default Layout;
