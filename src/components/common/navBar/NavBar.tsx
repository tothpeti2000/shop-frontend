import { Box, Flex, Spacer } from "@chakra-ui/react";
import { FaSlideshare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToggleProvider } from "../../../context/ToggleContext";
import { useUserContext } from "../../../context/UserContext";
import useNavBar from "../../../hooks/useNavBar";
import { animated, bgDark } from "../../../styles/styles";
import Cart from "../../cart/Cart";
import AppIconButton from "../../utils/AppIconButton";
import AuthButton from "./AuthButton";
import CartButton from "./CartButton";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const { height } = useNavBar();
  const { token } = useUserContext();

  return (
    <Flex
      as="nav"
      alignItems="center"
      px="5%"
      h={height}
      {...bgDark}
      sx={{ pos: "sticky", top: "0" }}
      fontSize="lg"
      {...animated}
      zIndex="999"
    >
      <NavBrand />

      <Spacer />

      <ToggleProvider>
        <SearchBar />
      </ToggleProvider>

      <NavLinks />

      {token !== null && (
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

      <Box mx={5}>
        <AuthButton />
      </Box>
    </Flex>
  );
};

export default NavBar;
