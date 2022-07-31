import * as yup from "yup";
import client from "./client";
import { UserCredentials } from "../interfaces/auth";

const useLogin = () => {
  const loginSchema = yup.object({
    userName: yup.string().required("Please, enter your username!"),
    password: yup.string().required("Please, enter your password!"),
  });

  const login = async (userCredentials: UserCredentials) => {
    return await client.post("/auth/login", userCredentials);
  };

  const isLoggedIn = () => {
    return sessionStorage.getItem("token") !== null;
  };

  const logout = () => {
    sessionStorage.removeItem("token");
  };

  return {
    loginSchema,
    login,
    isLoggedIn,
    logout,
  };
};

export default useLogin;
