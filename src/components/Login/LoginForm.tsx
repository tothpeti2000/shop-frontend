import {
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

interface MyFormValues {
  userName: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { userName: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field name="userName">
          {() => (
            <FormControl mb={2}>
              <Input type={"text"} placeholder="Username" size={"lg"} />
            </FormControl>
          )}
        </Field>

        <Field name="password">
          {() => (
            <FormControl mb={2}>
              <Input type={"password"} placeholder="Password" size={"lg"} />
            </FormControl>
          )}
        </Field>

        <Button type="submit" w={"100%"} size={"lg"} colorScheme={"messenger"}>
          Log In
        </Button>

        <Divider my={5} />

        <Flex direction={"column"} alignItems={"center"}>
          <Text color={"gray.500"}>You don't have an account yet?</Text>

          <Link to={"/register"}>
            <Button mt={2} size={"lg"} colorScheme={"whatsapp"}>
              Create new account
            </Button>
          </Link>
        </Flex>
      </Form>
    </Formik>
  );
};

export default LoginForm;
