import { CartItemProps, CartItemToUpdate } from "../../interfaces/cart";
import { CartItemToAdd } from "../../interfaces/product";
import useAPI from "./useAPI";

const useCart = () => {
  const client = useAPI();

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
