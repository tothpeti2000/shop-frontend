import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const startHeight = "100px";
  const shrinkedHeight = "70px";

  const startFontSize = "lg";
  const shrinkedFontSize = "md";

  const [isShrunk, SetShrunk] = useState(false);

  useEffect(() => {
    const Handler = () => {
      SetShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", Handler);

    return () => window.removeEventListener("scroll", Handler);
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      px="10%"
      h={isShrunk ? shrinkedHeight : startHeight}
      bgColor="black"
      color="white"
      sx={{ pos: "sticky", top: "0" }}
      fontSize={isShrunk ? shrinkedFontSize : startFontSize}
      transition="0.5s"
      zIndex="1"
    >
      <NavBrand />
      <Spacer />
      <NavLinks />
    </Flex>
  );
};

export default NavBar;
