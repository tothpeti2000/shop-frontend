import { createContext, FC, useContext, useState } from "react";
import { CartItemDto } from "../models";

const useCheckoutContextValue = () => {
  const [cartItems, setCartItems] = useState<CartItemDto[]>([]);

  return {
    cartItems,
    setCartItems,
  };
};

const CheckoutContext = createContext(
  {} as ReturnType<typeof useCheckoutContextValue>
);

const CheckoutProvider: FC = ({ children }) => {
  return (
    <CheckoutContext.Provider value={useCheckoutContextValue()}>
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckoutContext = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutContext };
