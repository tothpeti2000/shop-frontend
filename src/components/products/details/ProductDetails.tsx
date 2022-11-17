import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../../api";
import { useErrorHandler } from "../../../api/client";
import useUserCredentials from "../../../hooks/useUserCredentials";
import { formatPrice } from "../../cart/utils";
import Loading from "../../Loading";
import AppImage from "../../utils/AppImage";
import AddToCartButton from "../AddToCartButton";
import AddToSharedCartDialog from "../AddToSharedCartDialog";
import ProductRating from "./ProductRating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductById(id!, {
    query: {
      onError: (err) => handleError(err.response),
    },
  });

  const { token } = useUserCredentials();
  const { handleError } = useErrorHandler();

  return (
    <Loading isLoading={isLoading}>
      {product && (
        <>
          <Flex p={10}>
            <AppImage
              src={product.imgUrl}
              alt="Product"
              w="500px"
              borderRadius={20}
              boxShadow="md"
            />

            <Flex direction="column" px={10}>
              <Flex justifyContent="space-between">
                <Heading>{product.name}</Heading>
                <ProductRating ratingValue={product.averageRating!} />
              </Flex>

              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {formatPrice(product.price)}
              </Text>

              <Text fontSize="lg">In stock: {product.stock}</Text>

              <Spacer />
              <Text>{product.description}</Text>
              <Spacer />

              <Box alignSelf="start" w="35%" minW="200px">
                <AddToCartButton
                  productId={id!}
                  disabled={product.stock! < 1}
                />
              </Box>
            </Flex>
          </Flex>

          {token !== null && <AddToSharedCartDialog productId={id!} />}
        </>
      )}
    </Loading>
  );
};

export default ProductDetails;
