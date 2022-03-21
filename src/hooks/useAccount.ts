import { useState } from "react";
import * as yup from "yup";
import UserService from "../services/UserService";

const useAccount = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const loginSchema = yup.object({
    userName: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const Register = async (
    userName: string,
    email: string,
    password: string
  ) => {
    setError("");
    setIsLoading(true);

    try {
      await UserService.CreateAccount(userName, email, password);
      alert("Account created successfully");
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }

    setIsLoading(false);
  };

  const Login = async (userName: string, password: string) => {
    setIsLoading(true);

    try {
      await UserService.LoginUser(userName, password);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }

    setIsLoading(false);
  };

  return { registerSchema, loginSchema, Register, Login, isLoading, error };
};

export default useAccount;
