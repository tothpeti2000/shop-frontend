import * as yup from "yup";
import { UserCredentials } from "../../interfaces/auth";
import { client } from "../../api/client";

const useLogin = () => {
  const loginSchema = yup.object({
    userName: yup.string().required("Please, enter your username!"),
    password: yup.string().required("Please, enter your password!"),
  });

  const login = async (userCredentials: UserCredentials) => {
    return await client.post("/auth/login", userCredentials);
  };

  return {
    loginSchema,
    login,
  };
};

export default useLogin;
