import { Button } from "@chakra-ui/button";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClearCart } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useCartContext } from "../../context/CartContext";
import { useToggleContext } from "../../context/ToggleContext";
import { formatPrice } from "./utils";

interface Props {
  total: number;
}

const Summary = (props: Props) => {
  const { close } = useToggleContext();

  const { mutateAsync: clearCart } = useClearCart();
  const { refreshCartItems } = useCartContext();
  const { handleError } = useErrorHandler();

  const handleClearClick = async () => {
    try {
      await clearCart();
      refreshCartItems();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <>
      <Heading textAlign="right">Total: {formatPrice(props.total)}</Heading>

      <Flex justifyContent="space-between" alignItems="center" mt={3}>
        <Button
          leftIcon={<FaTrash />}
          colorScheme="red"
          onClick={handleClearClick}
        >
          Clear cart
        </Button>

        <Link to="/checkout">
          <Button
            colorScheme="teal"
            rightIcon={<Icon as={FaCheckCircle} />}
            onClick={close}
          >
            Checkout
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Summary;
