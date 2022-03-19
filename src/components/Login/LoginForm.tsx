import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
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

        <Link to={"/register"}>
          <Button w={"50%"} mt={5} size={"lg"} colorScheme={"whatsapp"}>
            Create new account
          </Button>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
