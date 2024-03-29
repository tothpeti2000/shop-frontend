import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductDto } from "../../../models";
import { animated } from "../../../styles/styles";
import { formatPrice } from "../../cart/utils";
import AppImage from "../../utils/AppImage";
import AddToCartButton from "../AddToCartButton";

const ProductListItem = (props: ProductDto) => {
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
        <AppImage src={props.imgUrl} alt="Product" w="300px" />
      </Link>

      <Box w="100%" my={3}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {props.name}
        </Text>

        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg">{formatPrice(props.price)}</Text>

          <Badge bgColor={isAvailable ? "green.500" : "red.500"} color="white">
            {isAvailable ? "IN STOCK" : "NOT AVAILABLE"}
          </Badge>
        </Flex>
      </Box>

      <AddToCartButton productId={props.id!} disabled={!isAvailable} />
    </Flex>
  );
};

export default ProductListItem;
