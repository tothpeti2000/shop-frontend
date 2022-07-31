import { GetItems } from "../../services/Cartservice";

const useCart = () => {
  const AddToCart = (productID: number, amount: number) => {
    //return AddItemToCart(productID, amount);
  };

  const GetCartItems = () => {
    return GetItems();
  };

  const UpdateItemAmount = (itemID: number, amount: number) => {
    //return UpdateAmount(itemID, amount);
  };

  return { AddToCart, GetCartItems, UpdateItemAmount };
};

export default useCart;
