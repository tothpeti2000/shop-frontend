import { Box, Button, Input, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../../api/useRegister";
import { RegisterInputs } from "../../interfaces/Auth";
import ErrorMessage from "../ErrorMessage";
import { CreateAccount } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { registerSchema, Register } = useRegister();
  const Mutate = CreateAccount();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });

  const OnSubmit: SubmitHandler<RegisterInputs> = (data) => {
    Mutate({
      userName: data.userName,
      email: data.email,
      password: data.password,
    });

    navigate("/register/confirm");
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
          //disabled={isLoading}
        >
          {/*{isLoading && <Spinner />}*/}
          Register
        </Button>

        {/*<ErrorMessage>{error}</ErrorMessage>*/}
      </form>
    </>
  );
};

export default RegisterForm;
