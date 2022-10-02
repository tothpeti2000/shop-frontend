import { Badge, Box, Icon, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../../context/CartContext";
import { useToggleContext } from "../../../context/ToggleContext";

const CartButton = () => {
  const { cartItems } = useCartContext();
  const { open } = useToggleContext();

  return (
    <Box pos="relative">
      <IconButton
        aria-label="Cart"
        colorScheme="yellow"
        icon={<Icon as={FaShoppingCart} boxSize="80%" />}
        onClick={open}
      />

      <Badge pos="absolute" top={-2} right={-2}>
        {cartItems.length}
      </Badge>
    </Box>
  );
};

export default CartButton;
