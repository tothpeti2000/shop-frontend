import { Image } from "@chakra-ui/react";

const Logo = () => {
  const logo = `${process.env.PUBLIC_URL}/assets/Skillet.jpg`;

  return <Image src={logo} alt="Logo" h="50px" />;
};

export default Logo;
