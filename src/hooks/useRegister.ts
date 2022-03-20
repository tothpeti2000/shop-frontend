import * as yup from "yup";
import { RegisterInputs } from "../interfaces/RegisterInputs";

const useRegister = () => {
  const schema = yup.object({
    userName: yup
      .string()
      .min(4, "Username must be at least 4 characters long")
      .max(50, "Username must be at most 50 characters long")
      .required("Please enter a username!"),
    email: yup
      .string()
      .email("Please provide a valid email address!")
      .required("Please enter your email address!"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .max(50, "Password must be at most 50 characters long")
      .required("Please enter a password!"),
    passwordAgain: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match!")
      .required("Please enter your password again!"),
  });

  const Register = async (data: RegisterInputs) => {
    await alert(JSON.stringify(data, null, 2));
  };

  return { schema, Register };
};

export default useRegister;
