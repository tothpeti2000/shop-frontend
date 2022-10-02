import { Flex } from "@chakra-ui/layout";
import { CloseButton, Image, Text } from "@chakra-ui/react";
import { useCartContext } from "../../context/CartContext";
import QuantityPicker from "./QuantityPicker";

interface Props {
  id: string;
  amount: number;
  name: string;
  price: number;
  imgUrl?: string;
}

const CartItem = (props: Props) => {
  const { deleteCartItem } = useCartContext();

  const handleClick = () => {
    deleteCartItem(props.id);
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
        <Text fontWeight="bold">{props.price}$</Text>
        <QuantityPicker id={props.id} amount={props.amount} />
      </Flex>

      <CloseButton pos="absolute" top={1} right={1} onClick={handleClick} />
    </Flex>
  );
};

export default CartItem;
