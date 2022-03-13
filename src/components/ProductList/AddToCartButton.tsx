import { Button, Icon, useToast } from "@chakra-ui/react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

interface IProps {
  ID: number;
  name: string;
  price: number;
}

const AddToCartButton = (props: IProps) => {
  //const { AddItem } = useOrderItemContext();
  const toast = useToast();

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
    //AddItem(props.id, props.title, props.price);
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
