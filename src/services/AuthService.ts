import { useMutation } from "react-query";
import client from "../api/common";
import { AccountDetails, LoginInputs } from "../interfaces/Auth";

export const CreateAccount = () => {
  const { mutate } = useMutation(async (userDetails: AccountDetails) => {
    return await client.post("/auth/register", userDetails);
  });

  return mutate;
};

export const LoginUser = () => {
  const { mutate } = useMutation(async (userCredentials: LoginInputs) => {
    return await client.post("/auth/login", userCredentials);
  });

  return mutate;
};
