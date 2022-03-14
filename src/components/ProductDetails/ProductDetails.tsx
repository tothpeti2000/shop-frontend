import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../ProductList/AddToCartButton";
import { Product } from "../ProductList/ProductListItem";

interface Params {
  id: string;
}

const ProductDetails = () => {
  const { ID } = useParams();
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    category: "",
    imgURL: "",
  });
  /*const [product, setProduct] = useState<IProduct>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    title: "",
    rating: { count: 0, rate: 0 },
    quantity: 1,
  });
  const { GetItemQuantity } = useOrderItemContext();*/
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProduct = async () => {
    /*const data = await fetch(`https://fakestoreapi.com/products/${ID}`);
    const product = await data.json();*/

    const products = [
      {
        id: 1,
        name: "Product1",
        price: 1000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
      },
      {
        id: 2,
        name: "Product2",
        price: 5000,
        stock: 0,
        category: "Construction toys",
        imgURL: "",
      },
      {
        id: 3,
        name: "Product3",
        price: 10000,
        stock: 10,
        category: "LEGO",
        imgURL: "",
      },
      {
        id: 4,
        name: "Product4",
        price: 1000,
        stock: 10,
        category: "F1 LEGO",
        imgURL: "",
      },
      {
        id: 5,
        name: "Product5",
        price: 10000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
      },
    ];

    const product = products.find((p) => p.id === parseInt(ID as string));

    setProduct(products[0]);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Flex w="80%" h="calc(100vh - 100px)" p={50} m="auto">
        <Image src={product.imgURL} />
        <Flex direction="column" justifyContent="space-between" px={10} py={5}>
          <Box>
            <Heading mb={2}>{product.name}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              ${product.price}
            </Text>
            {/*<RatingStars ratingValue={product.rating.rate} />*/}
          </Box>
          {/*<Text fontSize="lg">{product.description}</Text>*/}
          <Box>
            {/*<Box fontSize="lg" mb={2}>
              In cart: {GetItemQuantity(parseInt(ID))}
  </Box>*/}
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
