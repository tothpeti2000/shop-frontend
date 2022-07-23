import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useLogin from "../../../api/useLogin";

const AuthButton = () => {
  const { IsLoggedIn, Logout } = useLogin();

  return (
    <Flex alignItems={"center"} ml={5}>
      {!IsLoggedIn() && (
        <Link to={"/login"}>
          <IconButton
            aria-label="Login"
            icon={<Icon as={FaUserCircle} boxSize="80%" />}
            colorScheme="yellow"
            mx={5}
          />
        </Link>
      )}

      {IsLoggedIn() && (
        <>
          <Flex direction={"column"}>
            <Text>Welcome</Text>
            <Text color={"yellow"}>{sessionStorage.getItem("userName")}</Text>
          </Flex>

          <Link to={"/login"}>
            <IconButton
              aria-label="Logout"
              icon={<Icon as={FiLogOut} boxSize="80%" />}
              colorScheme="yellow"
              mx={5}
              onClick={Logout}
            />
          </Link>
        </>
      )}
    </Flex>
  );
};

export default AuthButton;
