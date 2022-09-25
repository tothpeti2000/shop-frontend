import * as yup from "yup";

const registrationSchema = yup.object({
  userName: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .max(50, "Username must be at most 50 characters long")
    .required("Please, enter a username!"),
  email: yup
    .string()
    .email("The provided text isn't a valid email address")
    .required("Please, enter your email address!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long")
    .test(
      "contains-non-alphanumeric",
      "Password must have at least one non alphanumeric character",
      (value) => value?.match(/[^a-zA-Z\d\s:]+/) !== null
    )
    .test(
      "contains-digit",
      "Password must have at least one digit",
      (value) => value?.match(/[0-9]+/) !== null
    )
    .test(
      "contains-uppercase",
      "Password must have at least one uppercase letter",
      (value) => value?.match(/[A-Z]+/) !== null
    )
    .required("Please, enter a password!"),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Please, enter your password again!"),
});

export default registrationSchema;
