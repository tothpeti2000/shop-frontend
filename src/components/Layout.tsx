import { FC } from "react";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navBar/NavBar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
