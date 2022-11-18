import { Flex } from "@chakra-ui/react";
import { Step, Steps } from "chakra-ui-steps";
import { useEffect } from "react";
import {
  FaFlag,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useUpdateStatus } from "../../api";
import { CheckoutProvider } from "../../context/CheckoutContext";
import { useStepperContext } from "../../context/StepperContext";
import { SharedCartStatus } from "../../models";
import CartContent from "./steps/cart/CartContent";
import DeliveryDetails from "./steps/delivery/DeliveryDetails";
import PaymentMethod from "./steps/payment/PaymentMethod";
import OrderSummary from "./steps/summary/OrderSummary";

const Checkout = () => {
  const { id } = useParams();
  const { stepIdx } = useStepperContext();

  const { mutateAsync: updateStatus } = useUpdateStatus();

  useEffect(() => {
    const updateSharedCartStatus = async (status: SharedCartStatus) =>
      updateStatus({
        data: {
          sharedCartId: id,
          status: status,
        },
      });

    id && updateSharedCartStatus(SharedCartStatus.CheckoutInProgress);

    return () => {
      id && updateSharedCartStatus(SharedCartStatus.Active);
    };
  }, [id, updateStatus]);

  const steps = [
    {
      label: "Cart content",
      icon: FaShoppingCart,
      content: <CartContent sharedCartId={id} />,
    },
    { label: "Delivery", icon: FaTruck, content: <DeliveryDetails /> },
    { label: "Payment", icon: FaMoneyCheckAlt, content: <PaymentMethod /> },
    {
      label: "Summary",
      icon: FaFlag,
      content: <OrderSummary sharedCartId={id} />,
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

export default Checkout;
