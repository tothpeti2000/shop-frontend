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
  firstName: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { firstName: "" };

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
              <Input placeholder="Username" />
            </FormControl>
          )}
        </Field>

        <Field name="password">
          {() => (
            <FormControl mb={2}>
              <Input placeholder="Password" />
            </FormControl>
          )}
        </Field>
        <Button type="submit" w={"100%"} colorScheme={"messenger"}>
          Log In
        </Button>

        <Link to={"/register"}>
          <Button w={"50%"} mt={5} colorScheme={"whatsapp"}>
            Create new account
          </Button>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
