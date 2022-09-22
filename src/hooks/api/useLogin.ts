import * as yup from "yup";

const useLogin = () => {
  const loginSchema = yup.object({
    userName: yup.string().required("Please, enter your username!"),
    password: yup.string().required("Please, enter your password!"),
  });

  return {
    loginSchema,
  };
};

export default useLogin;
