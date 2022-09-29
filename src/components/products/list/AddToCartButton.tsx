import { Button, Icon, Spinner } from "@chakra-ui/react";
import request from "axios";
import { FaCartPlus } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { useErrorHandler } from "../../../api/client";
import useFeedback from "../../../hooks/useFeedback";

interface Props {
  productId: string;
}

const AddToCartButton = (props: Props) => {
  //const { mutateAsync, isLoading } = useMutation(addToCart);
  const { handleError } = useErrorHandler();
  const { showSuccess } = useFeedback();

  const handleClick = async () => {
    try {
      //await mutateAsync({ productID: props.productID, amount: 1 });
      showSuccess("Item added", "We've added the item to your cart");
    } catch (err) {}
  };

  return (
    <Button
      // disabled={isLoading}
      colorScheme="red"
      w="100%"
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={handleClick}
    >
      {/* {isLoading && <Spinner />} */}
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
