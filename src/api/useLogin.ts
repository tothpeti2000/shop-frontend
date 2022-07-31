import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { LoginInputs } from "../interfaces/auth";
import { LoginUser } from "../services/AuthService";

const useLogin = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object({
    userName: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const login = (userName: string, password: string) => {
    const data: LoginInputs = {
      userName: userName,
      password: password,
    };

    const { mutateAsync } = LoginUser();

    mutateAsync(data);
    navigate("/");
  };

  const isLoggedIn = () => {
    return sessionStorage.getItem("userName") !== null;
  };

  const logout = () => {
    sessionStorage.removeItem("userName");
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
