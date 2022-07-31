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
import ErrorMessage from "../utils/ErrorMessage";
import request from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { UserCredentials } from "../../interfaces/auth";
import useFeedback from "../useFeedback";

const LoginForm = () => {
  const { loginSchema, login } = useLogin();
  const { showSuccess, showError } = useFeedback();

  const {
    mutateAsync: loginUser,
    isLoading,
    error,
    isError,
  } = useMutation(login);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const queryCache = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<UserCredentials> = async (data) => {
    try {
      const result = await loginUser(data);
      sessionStorage.setItem("token", result.data);

      showSuccess("Successfully logged in");
      navigate("/");
      queryCache.invalidateQueries("cartitems");
    } catch (err) {
      showError("Login failed", String(error));
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
