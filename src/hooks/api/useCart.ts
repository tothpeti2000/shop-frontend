import { CartItemToAdd, CartItemToUpdate } from "../../interfaces/cart";
import { CartItemProps } from "../../interfaces/cart";
import { client } from "../../api/client";

const useCart = () => {
  const addToCart = async (item: CartItemToAdd) => {
    return await client.post("/carts/add", item);
  };

  const getCartItems = async () => {
    return await client.get<CartItemProps[]>("carts/list");
  };

  const updateItemAmount = async (item: CartItemToUpdate) => {
    return await client.post("/carts/update", item);
  };

  return { addToCart, getCartItems, updateItemAmount };
};

export default useCart;
