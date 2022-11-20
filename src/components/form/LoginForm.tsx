import { Button, Center, Divider, Spinner, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../api";
import { useErrorHandler } from "../../api/client";
import { LoginUserResponse } from "../../models";
import InputField from "./fields/InputField";
import loginSchema from "./schemas/login";

interface UserCredentials {
  userName: string;
  password: string;
}

interface Props {
  onSuccess: (response: LoginUserResponse) => void;
}

const LoginForm = (props: Props) => {
  const { mutateAsync: loginUser, isLoading } = useLoginUser();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<UserCredentials> = async (data) => {
    try {
      const response = await loginUser({ data: data });
      props.onSuccess(response);
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          name="userName"
          placeholder="Username"
          control={control}
          autoFocus
          validationError={errors.userName?.message}
          size="lg"
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          control={control}
          validationError={errors.password?.message}
          size="lg"
        />

        <Button
          type="submit"
          w="100%"
          colorScheme="messenger"
          disabled={isLoading}
          size="lg"
        >
          {isLoading && <Spinner />}
          Log In
        </Button>
      </form>

      <Link to="/forgot-password">
        <Text textAlign="center" mt={2}>
          Forgot password?
        </Text>
      </Link>

      <Divider my={5} />

      <Center flexDir="column">
        <Text color="gray.500" mb={2}>
          You don't have an account yet?
        </Text>

        <Link to="/register">
          <Button size="lg" colorScheme="whatsapp">
            Create new account
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default LoginForm;
