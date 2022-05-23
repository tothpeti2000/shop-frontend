import { useState } from "react";
import * as yup from "yup";
import { LoginUser } from "../services/AuthService";

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginSchema = yup.object({
    userName: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const Login = (userName: string, password: string) => {
    try {
      LoginUser(userName, password);
      alert("Login successful");
    } catch (err) {
      const error = err as Error;
    }

    return {
      loginSchema,
      Login,
      loggedIn,
    };
  };
};

export default useLogin;
