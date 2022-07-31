import { IconButton, Icon } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to={"/login"}>
      <IconButton
        aria-label="Login"
        icon={<Icon as={FaUserCircle} boxSize="80%" />}
        colorScheme="yellow"
        mx={5}
      />
    </Link>
  );
};

export default LoginButton;
