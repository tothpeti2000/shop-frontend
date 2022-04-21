import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { CreateAccount } from "../services/UserService";

const useRegister = () => {
  const navigate = useNavigate();

  const registerSchema = yup.object({
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
      .min(8, "Password must be at least 8 characters long")
      .max(50, "Password must be at most 50 characters long")
      .required("Please enter a password!"),
    passwordAgain: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match!")
      .required("Please enter your password again!"),
  });

  const Register = async (
    userName: string,
    email: string,
    password: string
  ) => {
    try {
      CreateAccount(userName, email, password);
      navigate("/register/confirm");
    } catch (err) {
      const error = err as Error;
    }
  };

  return {
    registerSchema,
    Register,
  };
};

export default useRegister;
