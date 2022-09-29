import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../../api";
import Loading from "../../Loading";
import AddToCartButton from "../list/AddToCartButton";
import RatingStars from "./RatingStars";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductById(id!);

  return (
    <Loading isLoading={isLoading}>
      <Flex p={50} m="auto">
        <Image src={product?.imgUrl || "https://picsum.photos/500"} />

        <Flex
          direction="column"
          justifyContent="space-between"
          px={10}
          py={5}
          boxShadow={"2xl"}
        >
          <Box>
            <Heading mb={2}>{product?.name}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              ${product?.price}
            </Text>
            <Text>In stock: {product?.stock}</Text>
            <RatingStars ratingValue={product?.averageRating!} />
            <Text fontSize={"lg"}>{product?.description}</Text>
          </Box>
          <Box>{/* <AddToCartButton productId={product?.id!} /> */}</Box>
        </Flex>
      </Flex>
    </Loading>
  );
};

export default ProductDetails;
