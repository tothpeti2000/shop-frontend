import { Box, Input, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface Inputs {
  Username: string;
  Email: string;
  Password: string;
  PasswordAgain: string;
}

const schema = yup.object({
  Username: yup.string().required().min(4).max(50),
  Email: yup.string().required().email(),
  Password: yup.string().required().min(4).max(50),
  PasswordAgain: yup
    .string()
    .required()
    .oneOf([yup.ref("Password"), null], "Passwords don't match!"),
});

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const OnSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Controller
          name="Username"
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
              <Text color={"red"}>{errors.Username?.message}</Text>
            </Box>
          )}
        />

        <Controller
          name="Email"
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
              <Text color={"red"}>{errors.Email?.message}</Text>
            </Box>
          )}
        />

        <Controller
          name="Password"
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
              <Text color={"red"}>{errors.Password?.message}</Text>
            </Box>
          )}
        />

        <Controller
          name="PasswordAgain"
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
              <Text color={"red"}>{errors.PasswordAgain?.message}</Text>
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
