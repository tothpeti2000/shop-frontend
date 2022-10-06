import { createContext, FC, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { getGetCartItemsQueryKey } from "../api";
import { CartItemDto } from "../models";

const useCartContextValue = () => {
  const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
  const queryCache = useQueryClient();

  const updateCartItems = (cartItems: CartItemDto[]) => {
    setCartItems(cartItems);
  };

  const refreshCartItems = () =>
    queryCache.invalidateQueries(getGetCartItemsQueryKey());

  return {
    cartItems,
    updateCartItems,
    refreshCartItems,
  };
};

const CartContext = createContext({} as ReturnType<typeof useCartContextValue>);

const CartProvider: FC = ({ children }) => {
  return (
    <CartContext.Provider value={useCartContextValue()}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
