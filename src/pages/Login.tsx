import { Flex, FormControl, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex minH={"86vh"}>
      <FormControl>
        <Input type="text" />
      </FormControl>
    </Flex>
  );
};

export default Login;
