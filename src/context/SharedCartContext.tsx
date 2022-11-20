import { createContext, FC, useContext, useState } from "react";
import { SharedCartItemDto } from "../models";

const useSharedCartContextValue = () => {
  const [cartItems, setCartItems] = useState<SharedCartItemDto[]>([]);

  const updateSharedCartItems = (cartItems: SharedCartItemDto[]) => {
    setCartItems(cartItems);
  };

  return {
    cartItems,
    updateSharedCartItems,
  };
};

const SharedCartContext = createContext(
  {} as ReturnType<typeof useSharedCartContextValue>
);

const SharedCartProvider: FC = ({ children }) => {
  return (
    <SharedCartContext.Provider value={useSharedCartContextValue()}>
      {children}
    </SharedCartContext.Provider>
  );
};

const useSharedCartContext = () => useContext(SharedCartContext);

export { SharedCartProvider, useSharedCartContext };
