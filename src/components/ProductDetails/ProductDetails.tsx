import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../ProductList/AddToCartButton";
import RatingStars from "./RatingStars";

interface ProductDetails {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  imgURL: string;
  description: string;
  averageRating: number;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetails>({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    category: "",
    imgURL: "",
    description: "",
    averageRating: 0,
  });

  //const { GetItemQuantity } = useOrderItemContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProduct = async () => {
    const data = await fetch(`https://localhost:7202/api/products/${id}`);
    const product = await data.json();

    /*const products: ProductDetails[] = [
      {
        id: 1,
        name: "Product1",
        price: 1000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
        averageRating: 5,
        description: "Description",
      },
      {
        id: 2,
        name: "Product2",
        price: 5000,
        stock: 0,
        category: "Construction toys",
        imgURL: "",
        averageRating: 2.6,
        description: "Description",
      },
      {
        id: 3,
        name: "Product3",
        price: 10000,
        stock: 10,
        category: "LEGO",
        imgURL: "",
        averageRating: 4.8,
        description: "Description",
      },
      {
        id: 4,
        name: "Product4",
        price: 1000,
        stock: 10,
        category: "F1 LEGO",
        imgURL: "",
        averageRating: 3.5,
        description: "Description",
      },
      {
        id: 5,
        name: "Product5",
        price: 10000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
        averageRating: 5,
        description: "Description",
      },
    ];

    const product = products.find((p) => p.id === parseInt(id!))!;*/

    setProduct(product);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Flex w="80%" h="calc(86vh)" p={50} m="auto">
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
      </Flex>
    </Skeleton>
  );
};

export default ProductDetails;
