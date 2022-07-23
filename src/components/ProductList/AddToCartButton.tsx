import { Button, Icon, Spinner, useToast } from "@chakra-ui/react";
import request from "axios";
import { FaCartPlus } from "react-icons/fa";
import { useQueryClient } from "react-query";
import { AddItemToCart } from "../../services/Cartservice";

interface IProps {
  productID: number;
}

const AddToCartButton = (props: IProps) => {
  const toast = useToast();
  const { mutateAsync, isLoading } = AddItemToCart();
  const queryCache = useQueryClient();

  const ShowSuccessToast = () => {
    toast({
      title: "Item added",
      description: "We've added the item to your cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const ShowErrorToast = () => {
    toast({
      title: "Item couldn't be added",
      description: "Please, log in to add this item to your cart",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };

  const HandleClick = async () => {
    try {
      await mutateAsync({ productID: props.productID, amount: 1 });

      ShowSuccessToast();
      queryCache.invalidateQueries("cartitems");
    } catch (err) {
      if (request.isAxiosError(err) && err.response?.status === 401) {
        ShowErrorToast();
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
