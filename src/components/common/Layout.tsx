import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box minH="88vh">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
