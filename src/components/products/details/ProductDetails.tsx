import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Image, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../../api";
import Loading from "../../Loading";
import AddToCartButton from "../AddToCartButton";
import AddToSharedCartDialog from "../AddToSharedCartDialog";
import ProductRating from "./ProductRating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductById(id!);

  return (
    <Loading isLoading={isLoading}>
      <Flex p={10}>
        <Image
          src={product?.imgUrl || "https://picsum.photos/500"}
          borderRadius={20}
          boxShadow="md"
        />

        <Flex direction="column" px={10}>
          <Flex justifyContent="space-between">
            <Heading>{product?.name}</Heading>
            <ProductRating ratingValue={product?.averageRating!} />
          </Flex>

          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            ${product?.price?.toFixed(2)}
          </Text>

          <Text fontSize="lg">In stock: {product?.stock}</Text>

          <Spacer />
          <Text>{product?.description}</Text>
          <Spacer />

          <Box alignSelf="start" w="35%" minW="200px">
            <AddToCartButton productId={id!} disabled={product?.stock! < 1} />
          </Box>
        </Flex>
      </Flex>

      <AddToSharedCartDialog productId={id!} />
    </Loading>
  );
};

export default ProductDetails;
