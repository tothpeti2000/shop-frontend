import { Box, Flex, Spacer } from "@chakra-ui/react";
import { CartProvider } from "../../../context/CartContext";
import { ToggleProvider } from "../../../context/ToggleContext";
import useNavBar from "../../../hooks/useNavBar";
import useUser from "../../../hooks/useUser";
import { animated, bgDark } from "../../../styles/styles";
import CartButton from "./CartButton";
import AuthButton from "./AuthButton";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Cart from "../../cart/Cart";

const NavBar = () => {
  const { height, opacity } = useNavBar();
  const { isLoggedIn } = useUser();

  return (
    <Flex
      as="nav"
      alignItems="center"
      px="10%"
      h={height}
      {...bgDark}
      sx={{ pos: "sticky", top: "0" }}
      fontSize="lg"
      opacity={opacity}
      {...animated}
      zIndex="999"
    >
      <NavBrand />

      <Spacer />

      <ToggleProvider>
        <SearchBar />
      </ToggleProvider>

      <NavLinks />

      <Box mx={2}>
        <AuthButton />
      </Box>

      {isLoggedIn() && (
        <ToggleProvider>
          <CartProvider>
            <CartButton />
            <Cart />
          </CartProvider>
        </ToggleProvider>
      )}
    </Flex>
  );
};

export default NavBar;
