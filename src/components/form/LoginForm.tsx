import { Button, Center, Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserHook } from "../../api";
import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import useToken from "../../hooks/useToken";
import InputField from "./InputField";
import loginSchema from "./schemas/login";

interface UserCredentials {
  userName: string;
  password: string;
}

const LoginForm = () => {
  const { showSuccess } = useFeedback();
  const { saveToken } = useToken();
  const { handleError } = useErrorHandler();

  const { mutateAsync: loginUser, isLoading } = useMutation(useLoginUserHook());

  const navigate = useNavigate();
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
      const response = await loginUser(data);

      saveToken(response.token ?? "");
      queryCache.invalidateQueries("cart-items");

      showSuccess("Successfully logged in");
      navigate("/");
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

      <Divider my={5} />

      <Center flexDir="column">
        <Text color={"gray.500"}>You don't have an account yet?</Text>

        <Link to={"/register"}>
          <Button mt={2} size={"lg"} colorScheme={"whatsapp"}>
            Create new account
          </Button>
        </Link>
      </Center>

      <Flex direction={"column"} alignItems={"center"}></Flex>
    </>
  );
};

export default LoginForm;
