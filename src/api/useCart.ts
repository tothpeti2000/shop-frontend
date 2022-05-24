import { AddItemToCart } from "../services/Cartservice";

const useCart = () => {
  const AddToCart = (productID: number, amount: number) => {
    return AddItemToCart(productID, amount);
  };

  return { AddToCart };
};

export default useCart;
