import { Box, Button, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { RegisterInputs } from "../../interfaces/RegisterInputs";

const schema = yup.object({
  userName: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .max(50, "Username must be at most 50 characters long")
    .required("Please enter a username!"),
  email: yup
    .string()
    .email("Please provide a valid email address!")
    .required("Please enter your email address!"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters long")
    .max(50, "Password must be at most 50 characters long")
    .required("Please enter a password!"),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match!")
    .required("Please enter your password again!"),
});

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema),
  });

  const OnSubmit: SubmitHandler<RegisterInputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
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
                {...field}
                placeholder="Username"
                size={"lg"}
              />
              <Text color={"red"}>{errors.userName?.message}</Text>
            </Box>
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"email"}
                {...field}
                placeholder="Email"
                size={"lg"}
              />
              <Text color={"red"}>{errors.email?.message}</Text>
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

        <Controller
          name="passwordAgain"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box mb={2}>
              <Input
                type={"password"}
                {...field}
                placeholder="Password again"
                size={"lg"}
              />
              <Text color={"red"}>{errors.passwordAgain?.message}</Text>
            </Box>
          )}
        />

        <Button type="submit" w={"100%"} size={"lg"} colorScheme={"messenger"}>
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
