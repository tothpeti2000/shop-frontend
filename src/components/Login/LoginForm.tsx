import {
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "../Footer/SubscriptionForm";

interface Inputs {
  userName: string;
  password: string;
}

const LoginForm = () => {
  const { control, handleSubmit } = useForm<Inputs>();

  const OnSubmit: SubmitHandler<Inputs> = (data) => {
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
            <Input
              type={"text"}
              {...field}
              placeholder="Username"
              size={"lg"}
              mb={2}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              type={"password"}
              {...field}
              placeholder="Password"
              size={"lg"}
              mb={2}
            />
          )}
        />
        <Button type="submit" w={"100%"} size={"lg"} colorScheme={"messenger"}>
          Log In
        </Button>
      </form>

      <Divider my={5} />

      <Flex direction={"column"} alignItems={"center"}>
        <Text color={"gray.500"}>You don't have an account yet?</Text>

        <Link to={"/register"}>
          <Button mt={2} size={"lg"} colorScheme={"whatsapp"}>
            Create new account
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default LoginForm;
