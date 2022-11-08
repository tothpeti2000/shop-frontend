import { Flex } from "@chakra-ui/react";
import { Step, Steps } from "chakra-ui-steps";
import {
  FaFlag,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { CheckoutProvider } from "../../context/CheckoutContext";
import { useStepperContext } from "../../context/StepperContext";
import DeliveryDetails from "./steps/DeliveryDetails";
import OrderSummary from "./steps/OrderSummary";
import PaymentMethod from "./steps/PaymentMethod";
import PlaceOrder from "./steps/PlaceOrder";

const Checkout = () => {
  const { stepIdx } = useStepperContext();

  const steps = [
    { label: "Summary", icon: FaShoppingCart, content: <OrderSummary /> },
    { label: "Delivery", icon: FaTruck, content: <DeliveryDetails /> },
    { label: "Payment", icon: FaMoneyCheckAlt, content: <PaymentMethod /> },
    { label: "Finish", icon: FaFlag, content: <PlaceOrder /> },
  ];

  return (
    <CheckoutProvider>
      <Steps activeStep={stepIdx}>
        {steps.map((step, idx) => (
          <Step key={idx} label={step.label} icon={step.icon}>
            <Flex minH="65vh" p={10} boxShadow="lg" borderBottomRadius={20}>
              <Flex direction="column" justifyContent="space-between" w="100%">
                {step.content}
              </Flex>
            </Flex>
          </Step>
        ))}
      </Steps>
    </CheckoutProvider>
  );
};

export default Checkout;
