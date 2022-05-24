import { Button, Icon, useToast } from "@chakra-ui/react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../api/useCart";

interface IProps {
  ID: number;
}

const AddToCartButton = (props: IProps) => {
  const toast = useToast();
  const { AddToCart } = useCart();

  const ShowToast = () => {
    toast({
      title: "Item added",
      description: "We've added the item to your cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const HandleClick = () => {
    ShowToast();
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
