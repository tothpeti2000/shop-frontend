import { useMutation } from "react-query";
import client from "../api/common";
import { CartItemToAdd } from "../interfaces/Product";

export const AddItemToCart = (productID: number, amount: number) => {
  const itemToAdd: CartItemToAdd = {
    id: productID,
    amount: amount,
  };

  const { mutateAsync, isLoading, isError, error } = useMutation(async () => {
    return await client.post("/carts/add", itemToAdd);
  });

  return { mutateAsync, isLoading, isError, error };
};
