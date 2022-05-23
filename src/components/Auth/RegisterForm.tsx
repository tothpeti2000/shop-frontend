import { Box, Button, Input, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../../api/useRegister";
import { RegisterInputs } from "../../interfaces/Auth";
import ErrorMessage from "../ErrorMessage";
import { CreateAccount } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import request from "axios";

const RegisterForm = () => {
  const { registerSchema } = useRegister();
  const { mutateAsync, isLoading, error, isError } = CreateAccount();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });

  const OnSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      await mutateAsync({
        userName: data.userName,
        email: data.email,
        password: data.password,
      });

      navigate("/login");
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        let msg = "";

        (err.response.data as string[]).forEach((err) => {
          msg += `${err}\n`;
        });

        setErrorMessages(msg);
      }

      if (request.isAxiosError(err) && !err.response) {
        setErrorMessages(
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
              <ErrorMessage>{errors.userName?.message}</ErrorMessage>
            </Box>
          )}
        />

        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"email"}
                {...field}
                placeholder="Email"
                size={"lg"}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Box>
          )}
        />

        <Controller
          name="passwordAgain"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"password"}
                {...field}
                placeholder="Password again"
                size={"lg"}
              />
              <ErrorMessage>{errors.passwordAgain?.message}</ErrorMessage>
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
          Register
        </Button>

        {isError && <ErrorMessage>{errorMessages}</ErrorMessage>}
      </form>
    </>
  );
};

export default RegisterForm;
