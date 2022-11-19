import { Flex } from "@chakra-ui/react";
import { Step, Steps } from "chakra-ui-steps";
import { useEffect } from "react";
import {
  FaFlag,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { useUpdateStatus } from "../../api";
import { useErrorHandler } from "../../api/client";
import { CheckoutProvider } from "../../context/CheckoutContext";
import { useStepperContext } from "../../context/StepperContext";
import { SharedCartStatus } from "../../models";
import CartContent from "./steps/cart/CartContent";
import DeliveryDetails from "./steps/delivery/DeliveryDetails";
import PaymentMethod from "./steps/payment/PaymentMethod";
import OrderSummary from "./steps/summary/OrderSummary";

interface Props {
  sharedCartId: string;
}

const SharedCheckout = (props: Props) => {
  const { stepIdx } = useStepperContext();
  const { mutateAsync: updateStatus } = useUpdateStatus({
    mutation: { onError: (err) => handleError(err.response) },
  });

  const { handleError } = useErrorHandler();

  useEffect(() => {
    const updateSharedCartStatus = async (status: SharedCartStatus) =>
      updateStatus({
        data: {
          sharedCartId: props.sharedCartId,
          status: status,
        },
      });

    updateSharedCartStatus(SharedCartStatus.CheckoutInProgress);

    return () => {
      updateSharedCartStatus(SharedCartStatus.Active);
    };
  }, [props.sharedCartId, updateStatus]);

  const steps = [
    {
      label: "Cart content",
      icon: FaShoppingCart,
      content: <CartContent sharedCartId={props.sharedCartId} />,
    },
    { label: "Delivery", icon: FaTruck, content: <DeliveryDetails /> },
    { label: "Payment", icon: FaMoneyCheckAlt, content: <PaymentMethod /> },
    {
      label: "Summary",
      icon: FaFlag,
      content: <OrderSummary sharedCartId={props.sharedCartId} />,
    },
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

export default SharedCheckout;
