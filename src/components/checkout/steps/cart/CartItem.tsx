import { Box, Flex, Text } from "@chakra-ui/react";
import { CartItemDto } from "../../../../models";
import { formatPrice } from "../../../cart/utils";
import AppImage from "../../../utils/AppImage";

const CartItem = (props: CartItemDto) => {
  return (
    <Flex>
      <Box mr={2}>
        <AppImage src={props.imgUrl} alt="Cart item" w="100px" />
      </Box>

      <Flex direction="column" justifyContent="space-around">
        <Text fontSize="2xl" fontWeight="bold">
          {props.name}
        </Text>

        <Flex justifyContent="space-between" fontSize="xl">
          <Text fontWeight="semibold">{formatPrice(props.price)}</Text>
          <Text>&times;{props.amount}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
