import { Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  const logo = `${process.env.PUBLIC_URL}/images/Skillet.jpg`;

  return <Image src={logo} alt="Logo" h="50px" />;
};

export default Logo;
