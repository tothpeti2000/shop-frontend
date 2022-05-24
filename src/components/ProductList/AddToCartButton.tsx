import { Button, Icon, useToast } from "@chakra-ui/react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../api/useCart";
import { AddItemToCart } from "../../services/Cartservice";
import request from "axios";

interface IProps {
  ID: number;
}

const AddToCartButton = (props: IProps) => {
  const toast = useToast();
  const { mutateAsync, isLoading, isError, error } = AddItemToCart();

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
      await mutateAsync({ id: props.ID, amount: 1 });

      ShowSuccessToast();
    } catch (err) {
      if (request.isAxiosError(err) && err.response?.status === 401) {
        ShowErrorToast();
      }
    }
  };

  return (
    <Button
      colorScheme="red"
      w="100%"
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={HandleClick}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
