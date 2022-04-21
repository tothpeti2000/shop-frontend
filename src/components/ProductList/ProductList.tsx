import { Flex } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import React from "react";
import useProducts from "../../api/useProducts";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const { GetProducts } = useProducts();
  const { isLoading, error, data } = GetProducts();

  return (
    <Skeleton isLoaded={!isLoading} flex="3" minH="100vh">
      <Flex wrap="wrap" justifyContent="space-around">
        {data?.data.items.map((p) => {
          return <ProductListItem key={p.id} {...p} />;
        })}
      </Flex>
    </Skeleton>
  );
};

export default ProductList;
