import { LoginInputs } from "../components/Login/LoginForm";

const useLogin = () => {
  const Login = (data: LoginInputs) => {
    alert(JSON.stringify(data, null, 2));
  };

  return { Login };
};

export default useLogin;
