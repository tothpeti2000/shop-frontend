import { Box, Button, Input, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/api/useRegister";
import useFeedback from "../../hooks/useFeedback";
import { RegisterDetails } from "../../interfaces/auth";
import ErrorMessage from "../utils/ErrorMessage";

const RegisterForm = () => {
  const { registerSchema, register } = useRegister();
  const { showError } = useFeedback();

  const {
    mutateAsync: createAccount,
    isLoading,
    isError,
    error,
  } = useMutation(register);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDetails>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterDetails> = async (data) => {
    try {
      await createAccount({
        userName: data.userName,
        email: data.email,
        password: data.password,
      });

      navigate("/register/confirm");
    } catch (err: any) {
      console.log(error);
      showError("Registration failed", err.response.data);
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
      </form>
    </>
  );
};

export default RegisterForm;
