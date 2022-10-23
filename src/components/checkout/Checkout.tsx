import { Button } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import DeliveryDetails from "./steps/DeliveryDetails";
import OrderSummary from "./steps/OrderSummary";
import PaymentMethod from "./steps/PaymentMethod";

const steps = [
  { label: "Summary", content: <OrderSummary /> },
  { label: "Delivery", content: <DeliveryDetails /> },
  { label: "Payment", content: <PaymentMethod /> },
];

const Checkout = () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <>
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }, idx) => (
          <Step label={label} key={idx}>
            {content}
          </Step>
        ))}
      </Steps>
      <Button disabled={activeStep === 0} onClick={prevStep}>
        Back
      </Button>
      <Button onClick={nextStep}>Next</Button>
    </>
  );
};

export default Checkout;
