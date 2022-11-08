import { Flex, Image, Text } from "@chakra-ui/react";
import { CartItemDto } from "../../../../models";

const CartItem = (props: CartItemDto) => {
  return (
    <Flex>
      <Image src={props.imgUrl || "https://picsum.photos/100"} mr={2} />

      <Flex direction="column" justifyContent="space-around">
        <Text fontSize="2xl" fontWeight="bold">
          {props.name}
        </Text>

        <Flex justifyContent="space-between" fontSize="xl">
          <Text fontWeight="semibold">${props.price}</Text>
          <Text>&times;{props.amount}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
