import { Button, Icon, Spinner } from "@chakra-ui/react";
import request from "axios";
import { FaCartPlus } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import useCart from "../../../hooks/api/useCart";
import useFeedback from "../../useFeedback";

interface IProps {
  productID: number;
}

const AddToCartButton = (props: IProps) => {
  const { addToCart } = useCart();
  const { mutateAsync, isLoading } = useMutation(addToCart);
  const queryCache = useQueryClient();
  const { showSuccess, showError } = useFeedback();

  const HandleClick = async () => {
    try {
      await mutateAsync({ productID: props.productID, amount: 1 });

      showSuccess("Item added", "We've added the item to your cart");
      queryCache.invalidateQueries("cartitems");
    } catch (err) {
      if (request.isAxiosError(err) && err.response?.status === 401) {
        showError(
          "Item couldn't be added",
          "Please, log in to add this item to your cart"
        );
      }
    }
  };

  return (
    <Button
      disabled={isLoading}
      colorScheme="red"
      w="100%"
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={HandleClick}
    >
      {isLoading && <Spinner />}
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
