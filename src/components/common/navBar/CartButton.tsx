import { Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../../context/CartContext";
import { useToggleContext } from "../../../context/ToggleContext";
import AppIconButton from "../../utils/AppIconButton";

const CartButton = () => {
  const { cartItems } = useCartContext();
  const { open } = useToggleContext();

  return (
    <Box pos="relative">
      <AppIconButton label="Cart" icon={FaShoppingCart} onClick={open} />

      <Badge pos="absolute" top={-2} right={-2}>
        {cartItems.length}
      </Badge>
    </Box>
  );
};

export default CartButton;
