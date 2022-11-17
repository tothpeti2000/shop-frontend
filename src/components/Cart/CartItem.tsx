import { Flex } from "@chakra-ui/layout";
import { Box, CloseButton, Text } from "@chakra-ui/react";
import { debounce } from "lodash-es";
import { useDeleteCartItem, useUpdateCartItemAmount } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useCartContext } from "../../context/CartContext";
import AppImage from "../utils/AppImage";
import QuantityPicker from "./QuantityPicker";
import { formatPrice } from "./utils";

interface Props {
  id: string;
  amount: number;
  name: string;
  price: number;
  imgUrl?: string;
}

const CartItem = (props: Props) => {
  const { mutateAsync: updateAmount } = useUpdateCartItemAmount();
  const { mutateAsync: deleteItem } = useDeleteCartItem();
  const { refreshCartItems } = useCartContext();
  const { handleError } = useErrorHandler();

  const handleChange = debounce(async (value: number) => {
    if (value === props.amount) {
      return;
    }

    try {
      await updateAmount({
        data: { id: props.id, amount: value },
      });

      refreshCartItems();
    } catch (err: any) {
      handleError(err.response);
    }
  }, 600);

  const handleClick = async () => {
    try {
      await deleteItem({ data: { id: props.id } });
      refreshCartItems();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <Flex
      alignItems="center"
      border="1px"
      borderColor="#cacaca"
      borderRadius={5}
      boxShadow="2xl"
      pos="relative"
    >
      <Box mr={2}>
        <AppImage src={props.imgUrl} alt="Cart item" w="100px" />
      </Box>

      <Flex direction="column" align="flex-start">
        <Text>{props.name}</Text>
        <Text fontWeight="bold">{formatPrice(props.price)}</Text>
        <QuantityPicker initialAmount={props.amount} onChange={handleChange} />
      </Flex>

      <CloseButton pos="absolute" top={1} right={1} onClick={handleClick} />
    </Flex>
  );
};

export default CartItem;
