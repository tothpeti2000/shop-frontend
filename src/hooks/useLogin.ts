import { useState } from "react";
import * as yup from "yup";
import UserService from "../services/UserService";

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginSchema = yup.object({
    userName: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const Login = async (userName: string, password: string) => {
    try {
      await UserService.LoginUser(userName, password);
      setLoggedIn(true);
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
