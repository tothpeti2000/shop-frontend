import { useMutation } from "react-query";
import client from "../api/common";
import { AccountDetails } from "../interfaces/Auth";

export const CreateAccount = () => {
  const { mutate } = useMutation(async (userDetails: AccountDetails) => {
    return await client.post("/auth/register", userDetails);
  });

  return mutate;
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
