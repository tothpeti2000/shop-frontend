import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import useFeedback from "../../../../hooks/useFeedback";
import { getTotalPrice } from "../../../cart/utils";
import StepButtons from "../../StepButtons";
import CartItem from "./CartItem";

const CartContent = () => {
  const { cartItems } = useCartContext();
  const { showError } = useFeedback();

  const validateStep = () => {
    if (cartItems.length === 0) {
      showError("Please, choose some products before placing your order!");
      return false;
    }

    return true;
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

        <Flex direction="column" alignItems="center" mr={10}>
          <Heading mb={10}>
            Total: ${getTotalPrice(cartItems).toFixed(2)}
          </Heading>

          <Text>You're not done yet?</Text>
          <Link to="/products">
            <Button leftIcon={<RiArrowGoBackFill />}>Continue shopping</Button>
          </Link>
        </Flex>
      </Flex>

      <StepButtons direction="next" onNextClick={validateStep} />
    </>
  );
};

export default CartContent;