import { Flex } from "@chakra-ui/react";
import Filter from "../components/ProductFilter/Filter";
import FilterHeader from "../components/ProductSort/Sort";
import ProductList from "../components/ProductList/ProductList";
import { ProductListProvider } from "../context/ProductListContext";

const Products = () => {
  return (
    <Flex direction="column" p={10}>
      <ProductListProvider>
        <FilterHeader />
        <Flex>
          <Filter />
          <ProductList />
        </Flex>
      </ProductListProvider>
    </Flex>
  );
};

export default Products;
