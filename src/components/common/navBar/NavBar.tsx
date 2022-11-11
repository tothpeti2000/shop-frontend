import { Box, Flex, Spacer } from "@chakra-ui/react";
import { FaSlideshare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToggleProvider } from "../../../context/ToggleContext";
import useNavBar from "../../../hooks/useNavBar";
import useUser from "../../../hooks/useUser";
import { animated, bgDark } from "../../../styles/styles";
import Cart from "../../cart/Cart";
import AppIconButton from "../../utils/AppIconButton";
import AuthButton from "./AuthButton";
import CartButton from "./CartButton";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

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
          <Box mx={3}>
            <CartButton />
          </Box>

          <Cart />

          <Link to="/shared-carts">
            <AppIconButton label="Shared cart" icon={FaSlideshare} />
          </Link>
        </ToggleProvider>
      )}
    </Flex>
  );
};

export default NavBar;
