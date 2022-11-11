import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { usePlaceOrder } from "../../../../api";
import { useErrorHandler } from "../../../../api/client";
import { useCartContext } from "../../../../context/CartContext";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import useFeedback from "../../../../hooks/useFeedback";
import { getTotalPrice } from "../../../cart/utils";
import StepButtons from "../../StepButtons";
import CartItem from "../cart/CartItem";
import SummaryItem from "./SummaryItem";

const OrderSummary = () => {
  const { cartItems } = useCartContext();
  const { deliveryData, paymentOption, getOrderDto } = useCheckoutContext();

  const { mutateAsync: placeOrder, isLoading } = usePlaceOrder();
  const { showSuccess, showError } = useFeedback();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const submitOrder = async () => {
    if (cartItems.length === 0) {
      showError("Please, choose some products before placing your order!");
      return;
    }

    const orderDto = getOrderDto();

    try {
      await placeOrder({ data: orderDto });

      showSuccess(
        "Order placed",
        "Your order has been placed successfully. Check out your mailbox for the confirmation email"
      );

      navigate("/products");
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <Box>
          {cartItems.map((item) => (
            <Box key={item.id} mb={5}>
              <CartItem {...item} />
            </Box>
          ))}
        </Box>

        <Flex direction="column" justifyContent="space-between" mr={10}>
          <Box fontSize="lg">
            <Box mb={5}>
              <Box mb={2}>
                <SummaryItem
                  icon={FaUserAlt}
                  label="Name"
                  value={`${deliveryData.firstName} ${deliveryData.lastName}`}
                />
              </Box>

              <Box mb={2}>
                <SummaryItem
                  icon={FaPhoneAlt}
                  label="Phone"
                  value={deliveryData.phone}
                />
              </Box>

              <Box mb={2}>
                <SummaryItem
                  icon={FaMapMarkedAlt}
                  label="Address"
                  value={`${deliveryData.zipCode} ${deliveryData.city}, ${deliveryData.address}`}
                />
              </Box>

              <Box mb={2}>
                <SummaryItem
                  icon={HiCreditCard}
                  label="Payment method"
                  value={paymentOption?.value!}
                />
              </Box>
            </Box>

            <Text fontSize="30px" fontWeight="bold">
              Total: ${getTotalPrice(cartItems).toFixed(2)}
            </Text>
          </Box>

          <Button p={6} fontSize="2xl" colorScheme="teal" onClick={submitOrder}>
            {isLoading && <Spinner />}
            Place order
          </Button>
        </Flex>
      </Flex>

      <StepButtons direction="prev" />
    </>
  );
};

export default OrderSummary;
