import { Flex } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductListItem, { Product } from "./ProductListItem";

const ProductList = () => {
  //const { products, InitProducts } = useProductListContext();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProducts = async () => {
    const data = await fetch("https://localhost:7202/api/products");
    const items = await data.json();

    //InitProducts(items);
    setProducts(items);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <Skeleton isLoaded={isLoaded} flex="3" minH="100vh">
      <Flex wrap="wrap" justifyContent="space-around">
        {products.map((p) => {
          return <ProductListItem key={p.id} {...p} />;
        })}
      </Flex>
    </Skeleton>
  );
};

export default ProductList;
