import { createContext, FC, useContext, useState } from "react";
import { DeliveryData } from "../components/checkout/steps/DeliveryDetails";
import { CartItemDto } from "../models";

const useCheckoutContextValue = () => {
  const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    city: "",
    address: "",
  });

  return {
    cartItems,
    setCartItems,
    deliveryData,
    setDeliveryData,
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
