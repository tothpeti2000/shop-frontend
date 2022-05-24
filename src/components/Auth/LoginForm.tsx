import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../api/useLogin";
import { LoginInputs } from "../../interfaces/Auth";
import { LoginUser } from "../../services/AuthService";
import ErrorMessage from "../ErrorMessage";
import request from "axios";
import { useState } from "react";

const LoginForm = () => {
  const { loginSchema, Login } = useLogin();
  const { mutateAsync, isLoading, isError, error } = LoginUser();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const OnSubmit: SubmitHandler<LoginInputs> = async (data: LoginInputs) => {
    try {
      const result = await mutateAsync(data);
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("token", result.data);

      navigate("/");
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data);
      }

      if (request.isAxiosError(err) && !err.response) {
        setErrorMessage(
          "Error while trying to connect to the server. Please, try again later!"
        );
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Controller
          name="userName"
          defaultValue=""
          control={control}
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
          defaultValue=""
          control={control}
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

        <Button
          type="submit"
          w={"100%"}
          mb={5}
          size={"lg"}
          colorScheme={"messenger"}
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          Log In
        </Button>

        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
