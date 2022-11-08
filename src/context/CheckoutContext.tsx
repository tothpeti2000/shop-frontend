import { createContext, FC, useContext, useState } from "react";
import { DeliveryData } from "../components/checkout/steps/delivery/DeliveryDetails";
import { CartItemDto } from "../models";

// TODO: Modify types based on backend DTOs

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
  const [paymentMethod, setPaymentMethod] = useState("");

  return {
    cartItems,
    setCartItems,
    deliveryData,
    setDeliveryData,
    paymentMethod,
    setPaymentMethod,
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
