import * as yup from "yup";
import { RegisterInputs } from "../interfaces/RegisterInputs";

const useRegister = () => {
  const schema = yup.object({
    userName: yup
      .string()
      .min(4, "Username must be at least 4 characters long")
      .max(50, "Username must be at most 50 characters long")
      .required("Please enter a username!"),
    email: yup
      .string()
      .email("Please provide a valid email address!")
      .required("Please enter your email address!"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(50, "Password must be at most 50 characters long")
      .required("Please enter a password!"),
    passwordAgain: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match!")
      .required("Please enter your password again!"),
  });

  const Register = async (
    userName: string,
    email: string,
    password: string
  ) => {
    const userDetails = {
      userName: userName,
      email: email,
      password: password,
    };
    //await alert(JSON.stringify(data, null, 2));
    const response = await fetch("https://localhost:7202/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const result = await response.json();

    console.log(result);
  };

  return { schema, Register };
};

export default useRegister;
