import { Flex } from "@chakra-ui/layout";
import { CloseButton, Image, Text } from "@chakra-ui/react";
import { useDeleteCartItem } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useCartContext } from "../../context/CartContext";
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
  const { mutateAsync: deleteItem } = useDeleteCartItem();
  const { refreshCartItems } = useCartContext();
  const { handleError } = useErrorHandler();

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
      <Image src={props.imgUrl || "https://picsum.photos/100"} mr={2} />

      <Flex direction="column" align="flex-start">
        <Text>{props.name}</Text>
        <Text fontWeight="bold">{formatPrice(props.price)}</Text>
        <QuantityPicker cartItemId={props.id} amount={props.amount} />
      </Flex>

      <CloseButton pos="absolute" top={1} right={1} onClick={handleClick} />
    </Flex>
  );
};

export default CartItem;
