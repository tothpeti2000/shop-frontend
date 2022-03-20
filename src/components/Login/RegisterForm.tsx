import { Box, Button, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../../hooks/useRegister";
import { RegisterInputs } from "../../interfaces/RegisterInputs";

const RegisterForm = () => {
  const { schema } = useRegister();
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
              <Text color={"red"}>{errors.email?.message}</Text>
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
              <Text color={"red"}>{errors.password?.message}</Text>
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
