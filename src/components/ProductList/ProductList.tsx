import { Flex } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useProductListContext } from "../../context/ProductListContext";
import ProductListItem, { Product } from "./ProductListItem";

const ProductList = () => {
  const { displayedProducts, InitProducts } = useProductListContext();
  //const [products, setProducts] = useState<Array<Product>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProducts = async () => {
    const data = await fetch("https://localhost:7202/api/products");
    const items = await data.json();

    /*const items = [
      {
        ID: 1,
        name: "Product1",
        price: 1000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
      },
      {
        ID: 2,
        name: "Product2",
        price: 5000,
        stock: 0,
        category: "Construction toys",
        imgURL: "",
      },
      {
        ID: 3,
        name: "Product3",
        price: 10000,
        stock: 10,
        category: "LEGO",
        imgURL: "",
      },
      {
        ID: 4,
        name: "Product4",
        price: 1000,
        stock: 10,
        category: "F1 LEGO",
        imgURL: "",
      },
      {
        ID: 5,
        name: "Product5",
        price: 10000,
        stock: 10,
        category: "Construction toys",
        imgURL: "",
      },
    ];*/

    InitProducts(items);
    //setProducts(items);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <Skeleton isLoaded={isLoaded} flex="3" minH="100vh">
      <Flex wrap="wrap" justifyContent="space-around">
        {displayedProducts.map((p) => {
          return <ProductListItem key={p.id} {...p} />;
        })}
      </Flex>
    </Skeleton>
  );
};

export default ProductList;
