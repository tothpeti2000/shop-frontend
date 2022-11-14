import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { useToggleContext } from "../../../context/ToggleContext";
import { SharedCartItemDto } from "../../../models";
import { animated } from "../../../styles/styles";
import QuantityPicker from "./QuantityPicker";

const SharedCartItem = (props: SharedCartItemDto) => {
  const { open } = useToggleContext();

  return (
    <Flex
      direction="column"
      pos="relative"
      w="250px"
      p={2}
      fontSize="lg"
      _hover={{ boxShadow: "lg" }}
      border="2px"
      borderColor="#efefef"
      borderRadius={10}
      {...animated}
      role="group"
    >
      <CloseButton
        pos="absolute"
        top={-3}
        right={-3}
        display="none"
        bgColor="white"
        boxShadow="lg"
        _hover={{ bgColor: "white" }}
        _groupHover={{ display: "block" }}
        _active={{ bgColor: "white" }}
        onClick={open}
      />

      <Image src={props.imgUrl || "https://picsum.photos/250"} alt="Product" />

      <Box mb={5}>
        <Text fontWeight="bold">{props.name}</Text>
        <Text>${props.price}</Text>
      </Box>

      <QuantityPicker defaultValue={props.amount!} />
    </Flex>
  );
};

export default SharedCartItem;
