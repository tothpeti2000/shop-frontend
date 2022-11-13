import { Box, Flex } from "@chakra-ui/react";
import { SharedCartItemDto } from "../../../models";

interface Props {
  cartItems: SharedCartItemDto[];
}

const SharedCartItems = (props: Props) => {
  return (
    <Flex>
      {props.cartItems.map((ci) => (
        <Box key={ci.id}>{ci.name}</Box>
      ))}
    </Flex>
  );
};

export default SharedCartItems;
