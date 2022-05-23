import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { LoginInputs } from "../interfaces/Auth";
import { LoginUser } from "../services/AuthService";

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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

    const Mutate = LoginUser();

    Mutate(data);
    navigate("/");
  };

  return {
    loginSchema,
    Login,
    loggedIn,
  };
};

export default useLogin;
