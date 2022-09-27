import { Box, Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Filter from "../../components/products/filter/Filter";
import ProductList from "../../components/products/list/ProductList";
import Sort from "../../components/products/sort/Sort";
import { ProductListProvider } from "../../context/ProductListContext";

// TODO: Check components
//    PriceRangePicker
//    CategoryPicker
// Sort
// ProductList

const ProductListPage = () => {
  return (
    <Layout>
      <ProductListProvider>
        <Flex p={10} gap={2}>
          <Box flex={1}>
            <Filter />
          </Box>

          <Flex flex={3} direction="column">
            <Box alignSelf="flex-end" mb={5}>
              <Sort />
            </Box>

            <ProductList />
          </Flex>
        </Flex>
      </ProductListProvider>
    </Layout>
  );
};

export default ProductListPage;
