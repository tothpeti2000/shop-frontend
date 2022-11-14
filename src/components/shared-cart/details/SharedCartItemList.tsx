import { Box, Flex, Text } from "@chakra-ui/react";
import { ToggleProvider } from "../../../context/ToggleContext";
import { SharedCartItemDto } from "../../../models";
import DeleteItemConfirmationDialog from "./DeleteItemConfirmationDialog";
import SharedCartItem from "./SharedCartItem";

interface Props {
  cartItems: SharedCartItemDto[];
}

const SharedCartItems = (props: Props) => {
  return props.cartItems.length > 0 ? (
    <Flex justifyContent="space-around" flexWrap="wrap" rowGap={10}>
      {props.cartItems.map((ci) => (
        <ToggleProvider key={ci.id}>
          <Box mx={2}>
            <SharedCartItem {...ci} />
          </Box>
          <DeleteItemConfirmationDialog cartItemId={ci.id!} />
        </ToggleProvider>
      ))}
    </Flex>
  ) : (
    <Text fontSize="xl">There are no items in the cart yet</Text>
  );
};

export default SharedCartItems;
