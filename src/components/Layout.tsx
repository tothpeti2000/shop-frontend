import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navBar/NavBar";

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
