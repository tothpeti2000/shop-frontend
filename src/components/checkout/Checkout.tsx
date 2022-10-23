import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  FaCaretLeft,
  FaCaretRight,
  FaFlag,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import DeliveryDetails from "./steps/DeliveryDetails";
import OrderSummary from "./steps/OrderSummary";
import PaymentMethod from "./steps/PaymentMethod";
import PlaceOrder from "./steps/PlaceOrder";

const steps = [
  { label: "Summary", icon: FaShoppingCart, content: <OrderSummary /> },
  { label: "Delivery", icon: FaTruck, content: <DeliveryDetails /> },
  { label: "Payment", icon: FaMoneyCheckAlt, content: <PaymentMethod /> },
  { label: "Finish", icon: FaFlag, content: <PlaceOrder /> },
];

const Checkout = () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Steps activeStep={activeStep}>
      {steps.map((step, idx) => (
        <Step key={idx} label={step.label} icon={step.icon}>
          <Box minH="65vh" p={10}>
            {step.content}
          </Box>

          <Flex>
            {activeStep > 0 && (
              <Button leftIcon={<FaCaretLeft />} onClick={prevStep}>
                Back
              </Button>
            )}

            <Spacer />

            {activeStep < steps.length - 1 && (
              <Button
                rightIcon={<FaCaretRight />}
                colorScheme="teal"
                onClick={nextStep}
              >
                Next
              </Button>
            )}
          </Flex>
        </Step>
      ))}
    </Steps>
  );
};

export default Checkout;
