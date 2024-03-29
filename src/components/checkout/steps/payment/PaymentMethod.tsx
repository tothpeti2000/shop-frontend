import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { HiCreditCard } from "react-icons/hi";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import useFeedback from "../../../../hooks/useFeedback";
import StepButtons from "../../StepButtons";
import PaymentMethodCard from "./PaymentMethodCard";
import { PaymentMethod as Payment } from "../../../../models";

export interface PaymentOption {
  name: string;
  value: Payment;
  icon: ReactElement;
}

const PaymentMethod = () => {
  const paymentMethods: PaymentOption[] = [
    { name: "On delivery", value: Payment.OnDelivery, icon: <GiMoneyStack /> },
    {
      name: "Credit card in advance",
      value: Payment.CreditCard,
      icon: <HiCreditCard />,
    },
  ];

  const { paymentOption } = useCheckoutContext();
  const { showError } = useFeedback();

  const validateStep = () => {
    if (paymentOption === undefined) {
      showError("You must choose a payment method before you continue");
      return false;
    }

    return true;
  };

  return (
    <>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={20}>
          How would you like to pay?
        </Text>

        <Flex justifyContent="space-around">
          {paymentMethods.map((pm) => (
            <PaymentMethodCard key={pm.value} {...pm} />
          ))}
        </Flex>
      </Box>

      <StepButtons direction="both" onNextClick={validateStep} />
    </>
  );
};

export default PaymentMethod;
