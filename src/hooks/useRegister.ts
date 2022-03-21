import axios from "axios";
import { useState } from "react";
import * as yup from "yup";

const useRegister = () => {
  const [error, setError] = useState("");

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
    setError("");

    const userDetails = {
      userName: userName,
      email: email,
      password: password,
    };
    //await alert(JSON.stringify(data, null, 2));
    await axios
      .post("https://localhost:7202/api/register", userDetails)
      .then(() => alert("Account created successfully"))
      .catch((err) => {
        if (err.response) {
          setError(err.response.data);
        }
      });
  };

  return { schema, Register, error };
};

export default useRegister;
