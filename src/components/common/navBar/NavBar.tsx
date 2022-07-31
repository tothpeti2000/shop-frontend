import { Flex } from "@chakra-ui/react";
import useLogin from "../../../api/useLogin";
import { ToggleProvider } from "../../../context/ToggleContext";
import { animated, bgDark, basicFlex } from "../../../styles/styles";
import Cart from "../../cart/Cart";
import CartButton from "../../cart/CartButton";
import AuthButton from "./AuthButton";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import useNavBar from "./useNavBar";

const NavBar = () => {
  const { height, opacity } = useNavBar();
  const { isLoggedIn } = useLogin();

  return (
    <Flex
      as="nav"
      {...basicFlex}
      px="10%"
      h={height}
      {...bgDark}
      sx={{ pos: "sticky", top: "0" }}
      fontSize="lg"
      opacity={opacity}
      {...animated}
      zIndex="1"
    >
      <NavBrand />

      <Flex {...basicFlex}>
        <SearchBar />
        <NavLinks />
        <AuthButton />

        {isLoggedIn() && (
          <ToggleProvider>
            <CartButton />
            <Cart />
          </ToggleProvider>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
