import { Button } from "@chakra-ui/react";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { PaymentOption } from "./PaymentMethod";

const PaymentMethodCard = (props: PaymentOption) => {
  const { paymentOption, setPaymentOption } = useCheckoutContext();

  const isCurrentlySelected = paymentOption?.value === props.value;
  const handleClick = () => setPaymentOption(props);

  return (
    <Button
      p={10}
      fontSize="2xl"
      colorScheme={isCurrentlySelected ? "teal" : "gray"}
      borderRadius={10}
      leftIcon={props.icon}
      onClick={handleClick}
    >
      {props.name}
    </Button>
  );
};

export default PaymentMethodCard;
