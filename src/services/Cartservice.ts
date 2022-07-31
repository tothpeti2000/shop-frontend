import { useMutation, useQuery } from "react-query";
import client from "../api/client";
import { CartItemProps, CartItemToUpdate } from "../interfaces/cart";
import { CartItemToAdd } from "../interfaces/product";

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
