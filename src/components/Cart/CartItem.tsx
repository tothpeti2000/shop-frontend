import { Box, Flex } from "@chakra-ui/layout";
import { CloseButton, Text } from "@chakra-ui/react";
import React from "react";
import { CartItemProps } from "../../interfaces/Cart";
import QuantityPicker from "./QuantityPicker";

const CartItem = (props: CartItemProps) => {
  return (
    <Flex
      align="center"
      textAlign="start"
      p={2}
      mb={5}
      boxShadow="dark-lg"
      gridGap="10px"
    >
      <Box flex="1" alignSelf="stretch" bgColor="gray.200"></Box>
      <Flex direction="column" align="flex-start" flex="2">
        {/*<Text>{props.title}</Text>
        <Text fontWeight="bold">{props.price}$</Text>*/}
        <QuantityPicker id={props.id} amount={props.amount} />
      </Flex>
      <CloseButton alignSelf="start" onClick={() => {}} />
    </Flex>
  );
};

export default CartItem;
