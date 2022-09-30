import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ToggleProvider } from "../../../context/ToggleContext";
import useUser from "../../../hooks/useUser";
import { animated, bgDark } from "../../../styles/styles";
import Cart from "../../cart/Cart";
import CartButton from "../../cart/CartButton";
import AuthButton from "./AuthButton";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import useNavBar from "../../../hooks/useNavBar";

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
          <CartButton />
          <Cart />
        </ToggleProvider>
      )}
    </Flex>
  );
};

export default NavBar;
