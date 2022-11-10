import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGetCartItems } from "../../../../api";
import { useErrorHandler } from "../../../../api/client";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { getTotalPrice } from "../../../cart/utils";
import Loading from "../../../Loading";
import StepButtons from "../../StepButtons";
import CartItem from "./CartItem";

const CartContent = () => {
  const { data, isLoading } = useGetCartItems({
    query: {
      onSuccess: (data) => setCartItems(data.cartItems!),
      onError: (err) => handleError(err.response),
    },
  });

  const { setCartItems } = useCheckoutContext();
  const { handleError } = useErrorHandler();

  return (
    <>
      <Loading isLoading={isLoading}>
        <Flex justifyContent="space-between">
          <Box>
            {data?.cartItems &&
              data.cartItems.map((item) => (
                <Box key={item.id} mb={5}>
                  <CartItem {...item} />
                </Box>
              ))}
          </Box>

          <Flex direction="column" alignItems="center" mr={10}>
            <Heading mb={10}>
              Total: ${getTotalPrice(data?.cartItems).toFixed(2)}
            </Heading>

            <Text>You're not done yet?</Text>
            <Link to="/products">
              <Button leftIcon={<RiArrowGoBackFill />}>
                Continue shopping
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Loading>

      <StepButtons direction="next" />
    </>
  );
};

export default CartContent;
