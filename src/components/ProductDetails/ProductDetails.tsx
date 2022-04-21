import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../api/useProducts";
import AddToCartButton from "../ProductList/AddToCartButton";
import RatingStars from "./RatingStars";

const ProductDetails = () => {
  const { id } = useParams();
  const { GetProductByID } = useProducts();
  const { isLoading, error, data } = GetProductByID(parseInt(id!!));

  return (
    <Skeleton isLoaded={!isLoading}>
      {/*<Flex w="80%" h="calc(86vh)" p={50} m="auto">
        <Image src={product.imgURL || "https://picsum.photos/500"} />
        <Flex
          direction="column"
          justifyContent="space-between"
          px={10}
          py={5}
          border={"1px"}
        >
          <Box>
            <Heading mb={2}>{product.name}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              ${product.price}
            </Text>
            <Text>In stock: {product.stock}</Text>
            <RatingStars ratingValue={product.averageRating} />
            <Text fontSize={"lg"}>{product.description}</Text>
          </Box>
          <Box>
            <AddToCartButton
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </Box>
        </Flex>
  </Flex>*/}
    </Skeleton>
  );
};

export default ProductDetails;
