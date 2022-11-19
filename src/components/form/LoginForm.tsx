import { Button, Center, Divider, Spinner, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUser } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";
import InputField from "./InputField";
import loginSchema from "./schemas/login";

interface UserCredentials {
  userName: string;
  password: string;
}

const LoginForm = () => {
  const { showSuccess } = useFeedback();
  const { saveUserData } = useUserContext();
  const { handleError } = useErrorHandler();

  const { mutateAsync: loginUser, isLoading } = useLoginUser();

  const navigate = useNavigate();
  const { state } = useLocation();

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

      saveUserData(response.token ?? "", response.name ?? "");
      showSuccess("Successfully logged in");

      // Redirect back to the previous route after successful login or to the home page after registration
      const prevPath = (state as any)?.prevPath;

      if (prevPath === "/register") {
        navigate("/");
      } else {
        navigate(-1);
      }
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
