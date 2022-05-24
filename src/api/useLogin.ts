import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { LoginInputs } from "../interfaces/Auth";
import { LoginUser } from "../services/AuthService";

const useLogin = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object({
    userName: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const Login = (userName: string, password: string) => {
    const data: LoginInputs = {
      userName: userName,
      password: password,
    };

    const { mutateAsync, isLoading, isError, error } = LoginUser();

    mutateAsync(data);
    navigate("/");
  };

  const IsLoggedIn = () => {
    return localStorage.getItem("userName") !== null;
  };

  const Logout = () => {
    localStorage.removeItem("userName");
  };

  return {
    loginSchema,
    Login,
    IsLoggedIn,
    Logout,
  };
};

export default useLogin;
