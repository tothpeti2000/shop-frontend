import { Text } from "@chakra-ui/react";
import useLogin from "../../../hooks/useLogin";

const LoginStatus = () => {
  //const { loggedIn } = useLogin();

  return <Text>{true ? "Log out" : "Log in"}</Text>;
};

export default LoginStatus;
