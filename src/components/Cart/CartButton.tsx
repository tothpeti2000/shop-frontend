import { IconButton, Icon, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useToggleContext } from "../../context/ToggleContext";

const CartButton = () => {
  const { open } = useToggleContext();

  return (
    <>
      <IconButton
        aria-label="Cart"
        colorScheme="yellow"
        icon={<Icon as={FaShoppingCart} boxSize="80%" />}
        onClick={open}
      />
      {/*<Badge>{data?.data.length}</Badge>*/}
    </>
  );
};

export default CartButton;
