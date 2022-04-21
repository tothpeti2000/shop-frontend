import { useMutation } from "react-query";
import client from "../api/common";

export const CreateAccount = (
  userName: string,
  email: string,
  password: string
) => {
  const userDetails = {
    userName: userName,
    email: email,
    password: password,
  };

  return useMutation(async (userDetails) => {
    return await client.post("/auth/register", userDetails);
  });
};

export const LoginUser = (userName: string, password: string) => {
  const userCredentials = {
    userName: userName,
    password: password,
  };

  return useMutation(async (userCredentials) => {
    return await client.post("/auth/login", userCredentials);
  });
};
