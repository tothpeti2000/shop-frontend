import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import useLogin from "../../hooks/useLogin";

export interface LoginInputs {
  userName: string;
  password: string;
}

const schema = yup.object({
  userName: yup.string().required("Please enter your username!"),
  password: yup.string().required("Please enter your password!"),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const { Login } = useLogin();

  const OnSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) => {
    Login(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Controller
          name="userName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"text"}
                autoFocus
                {...field}
                placeholder="Username"
                size={"lg"}
              />
              <Text color={"red"}>{errors.userName?.message}</Text>
            </Box>
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"password"}
                {...field}
                placeholder="Password"
                size={"lg"}
              />
              <Text color={"red"}>{errors.password?.message}</Text>
            </Box>
          )}
        />
        <Button type="submit" w={"100%"} size={"lg"} colorScheme={"messenger"}>
          Log In
        </Button>
      </form>

      <Divider my={5} />

      <Flex direction={"column"} alignItems={"center"}>
        <Text color={"gray.500"}>You don't have an account yet?</Text>

        <Link to={"/register"}>
          <Button mt={2} size={"lg"} colorScheme={"whatsapp"}>
            Create new account
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default LoginForm;
