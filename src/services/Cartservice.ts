import { useMutation } from "react-query";
import client from "../api/common";
import { CartItemToAdd } from "../interfaces/Product";

export const AddItemToCart = () => {
  const { mutateAsync, isLoading, isError, error } = useMutation(
    async (itemToAdd: CartItemToAdd) => {
      return await client.post("/carts/add", itemToAdd, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      });
    }
  );

  return { mutateAsync, isLoading, isError, error };
};
