import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useParams } from "react-router-dom";
import useProducts from "../../../api/useProducts";
import AddToCartButton from "../productList/AddToCartButton";

const Details = () => {
  const { id } = useParams();
  const { GetProductByID } = useProducts();
  const { isLoading, data } = GetProductByID(parseInt(id!));

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex w="80%" h="calc(86vh)" p={50} m="auto">
        <Image src={data?.data.imgURL || "https://picsum.photos/500"} />
        <Flex
          direction="column"
          justifyContent="space-between"
          px={10}
          py={5}
          boxShadow={"2xl"}
        >
          <Box>
            <Heading mb={2}>{data?.data.name}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              ${data?.data.price}
            </Text>
            <Text>In stock: {data?.data.stock}</Text>
            {/*<RatingStars ratingValue={data?.data.averageRating!} />*/}
            <Text fontSize={"lg"}>{data?.data.description}</Text>
          </Box>
          <Box>
            <AddToCartButton productID={data?.data.id!} />
          </Box>
        </Flex>
      </Flex>
    </Skeleton>
  );
};

export default Details;
