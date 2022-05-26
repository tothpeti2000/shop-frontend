import { useMutation, useQuery } from "react-query";
import client from "../api/common";
import { CartItemProps, CartItemToUpdate } from "../interfaces/Cart";
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

export const GetItems = () => {
  return useQuery("cartitems", async () => {
    return await client.get<CartItemProps[]>("carts/list");
  });
};

export const UpdateAmount = () => {
  const { mutateAsync, isLoading, error, isError } = useMutation(
    async (cartItem: CartItemToUpdate) => {
      return await client.post("/carts/update", cartItem, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      });
    }
  );
  return { mutateAsync, isLoading, isError, error };
};