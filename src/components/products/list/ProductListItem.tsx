import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { animated } from "../../../styles/styles";
import AddToCartButton from "../AddToCartButton";

const ProductListItem = (props: any) => {
  const isAvailable = props.stock! > 0;

  return (
    <Flex
      direction="column"
      alignItems="center"
      w="300px"
      p={2}
      _hover={{ boxShadow: "2xl" }}
      border="2px"
      borderColor="#efefef"
      borderRadius={10}
      {...animated}
    >
      <Link to={`/products/${props.id}`}>
        <Image
          src={props.imgUrl || "https://picsum.photos/300"}
          alt="Product"
        />
      </Link>

      <Box w="100%" my={3}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {props.name}
        </Text>

        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg">{`$${props.price.toFixed(2)}`}</Text>

          <Badge bgColor={isAvailable ? "green.200" : "red.500"}>
            {isAvailable ? "IN STOCK" : "NOT AVAILABLE"}
          </Badge>
        </Flex>
      </Box>

      <AddToCartButton productId={props.id!} disabled={!isAvailable} />
    </Flex>
  );
};

export default ProductListItem;
