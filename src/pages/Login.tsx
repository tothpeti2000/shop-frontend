import { Box, Flex } from "@chakra-ui/react";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      minH={"86vh"}
    >
      <Box w={"30%"} p={5} borderRadius={"2xl"} boxShadow={"dark-lg"}>
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default Login;
