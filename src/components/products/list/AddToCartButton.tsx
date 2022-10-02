import { Button, Icon } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import useFeedback from "../../../hooks/useFeedback";

interface Props {
  productId: string;
  disabled?: boolean;
}

const AddToCartButton = (props: Props) => {
  const { showSuccess } = useFeedback();

  const handleClick = async () => {
    showSuccess("Item added", "We've added the item to your cart");
  };

  return (
    <Button
      colorScheme="red"
      w="100%"
      disabled={props.disabled}
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={handleClick}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
