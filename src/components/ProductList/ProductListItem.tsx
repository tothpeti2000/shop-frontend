import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductListItem } from "../../interfaces/Product";
import AddToCartButton from "./AddToCartButton";

const ProductItem = (props: ProductListItem) => {
  const isAvailable = props.stock > 0;

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      w="20%"
      p={2}
      mx={5}
      mb={20}
      _hover={{ boxShadow: "dark-lg" }}
      transition="0.5s"
      border="1px solid lightgrey"
      borderRadius={10}
    >
      <Link to={`/products/${props.id}`}>
        <Image
          src={props.imgURL || "https://picsum.photos/200"}
          alt="Product"
        />
      </Link>
      <Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontWeight="bold">{props.name}</Text>
          <Badge bgColor={isAvailable ? "green.200" : "red.500"}>
            {isAvailable ? "IN STOCK" : "NOT AVAILABLE"}
          </Badge>
        </Flex>
        <Text>{`$${props.price}`}</Text>
        <AddToCartButton ID={props.id} />
      </Box>
    </Flex>
  );
};

export default ProductItem;
