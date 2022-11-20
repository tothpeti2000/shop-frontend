import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { basicFlex } from "../../../styles/styles";
import Logo from "./Logo";

const NavBrand = () => {
  return (
    <Link to="/">
      <Flex {...basicFlex}>
        <Logo />
        Awesome Sneakers
      </Flex>
    </Link>
  );
};

export default NavBrand;
