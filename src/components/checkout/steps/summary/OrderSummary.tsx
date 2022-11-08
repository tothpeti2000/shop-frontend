import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { getTotalPrice } from "../../../cart/utils";
import StepButtons from "../../StepButtons";
import CartItem from "../cart/CartItem";
import SummaryItem from "./SummaryItem";

const OrderSummary = () => {
  const { cartItems, deliveryData, paymentMethod } = useCheckoutContext();

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
                  value={paymentMethod}
                />
              </Box>
            </Box>

            <Text fontSize="30px" fontWeight="bold">
              Total: ${getTotalPrice(cartItems)}
            </Text>
          </Box>

          <Button p={6} fontSize="2xl" colorScheme="teal">
            Place order
          </Button>
        </Flex>
      </Flex>

      <StepButtons direction="prev" />
    </>
  );
};

export default OrderSummary;
