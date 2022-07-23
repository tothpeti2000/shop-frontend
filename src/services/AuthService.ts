import { useMutation } from "react-query";
import client from "../api/common";
import { AccountDetails, LoginInputs } from "../interfaces/auth";

export const CreateAccount = () => {
  const { mutateAsync, isLoading, isError, error } = useMutation(
    async (userDetails: AccountDetails) => {
      return await client.post("/auth/register", userDetails);
    }
  );

  return { mutateAsync, isLoading, isError, error };
};

export const LoginUser = () => {
  const { mutateAsync, isLoading, error, isError } = useMutation(
    async (userCredentials: LoginInputs) => {
      return await client.post("/auth/login", userCredentials);
    }
  );

  return { mutateAsync, isLoading, isError, error };
};
