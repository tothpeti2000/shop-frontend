import { Button, Icon, Spinner } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { useAddItemToCart } from "../../../api";
import { useErrorHandler } from "../../../api/client";
import { useCartContext } from "../../../context/CartContext";
import useFeedback from "../../../hooks/useFeedback";

interface Props {
  productId: string;
  disabled?: boolean;
}

const AddToCartButton = (props: Props) => {
  const { mutateAsync: addItemToCart, isLoading } = useAddItemToCart();
  const { refreshCartItems } = useCartContext();
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();

  const handleClick = async () => {
    try {
      await addItemToCart({
        data: {
          productId: props.productId,
        },
      });

      showSuccess("Item added", "We've added the item to your cart");
      refreshCartItems();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <Button
      colorScheme="red"
      w="100%"
      disabled={props.disabled}
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={handleClick}
    >
      {isLoading && <Spinner />}
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
