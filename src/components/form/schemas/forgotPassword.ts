import * as yup from "yup";

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("The provided text isn't a valid email address")
    .required("Please, enter your email address!"),
});

export default forgotPasswordSchema;
