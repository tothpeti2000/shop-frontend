import { createContext, FC, useContext, useState } from "react";
import { DeliveryData } from "../components/checkout/steps/delivery/DeliveryDetails";
import { PaymentOption } from "../components/checkout/steps/payment/PaymentMethod";
import { PlaceOrderCommand, PlaceSharedOrderCommand } from "../models";

const useCheckoutContextValue = () => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    city: "",
    address: "",
  });
  const [paymentOption, setPaymentOption] = useState<PaymentOption | undefined>(
    undefined
  );

  const getOrderDto = (sharedCartId?: string) => {
    const dto: PlaceOrderCommand | PlaceSharedOrderCommand = {
      sharedCartId: sharedCartId,
      customerData: {
        firstName: deliveryData.firstName,
        lastName: deliveryData.lastName,
        phone: deliveryData.phone,
      },
      deliveryData: {
        zipCode: deliveryData.zipCode,
        city: deliveryData.city,
        address: deliveryData.address,
      },
      paymentMethod: paymentOption?.value,
    };

    return dto;
  };

  return {
    deliveryData,
    setDeliveryData,
    paymentOption,
    setPaymentOption,
    getOrderDto,
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
