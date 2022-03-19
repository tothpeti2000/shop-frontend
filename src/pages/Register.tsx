import { Box, Flex } from "@chakra-ui/react";
import RegisterForm from "../components/Login/RegisterForm";

const Register = () => {
  return (
    <Flex minH={"86vh"}>
      <Box>
        <RegisterForm />
      </Box>
    </Flex>
  );
};

export default Register;
