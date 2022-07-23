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

  const Login = (userName: string, password: string) => {
    const data: LoginInputs = {
      userName: userName,
      password: password,
    };

    const { mutateAsync } = LoginUser();

    mutateAsync(data);
    navigate("/");
  };

  const IsLoggedIn = () => {
    return sessionStorage.getItem("userName") !== null;
  };

  const Logout = () => {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("token");
  };

  return {
    loginSchema,
    Login,
    IsLoggedIn,
    Logout,
  };
};

export default useLogin;
