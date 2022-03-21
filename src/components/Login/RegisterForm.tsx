import { Box, Button, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../../hooks/useRegister";
import { RegisterInputs } from "../../interfaces/RegisterInputs";
import ErrorMessage from "../ErrorMessage";

const RegisterForm = () => {
  const { schema, Register, error } = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema),
  });

  const OnSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    await Register(data.userName, data.email, data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Controller
          name="userName"
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
        >
          Register
        </Button>

        <ErrorMessage>{error}</ErrorMessage>
      </form>
    </>
  );
};

export default RegisterForm;
