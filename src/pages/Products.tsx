import { Flex } from "@chakra-ui/react";
import Filter from "../components/ProductFilter/Filter";
import FilterHeader from "../components/ProductSort/Sort";
import ProductList from "../components/ProductList/ProductList";

const Products = () => {
  return (
    <Flex direction="column" p={10}>
      <FilterHeader />
      <Flex>
        <Filter />
        <ProductList />
      </Flex>
    </Flex>
  );
};

export default Products;
