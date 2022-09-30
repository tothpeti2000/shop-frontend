import { Box, Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Filter from "../../components/products/filter/Filter";
import ProductList from "../../components/products/list/ProductList";
import Search from "../../components/products/search/Search";
import Sort from "../../components/products/sort/Sort";
import { ProductListProvider } from "../../context/ProductListContext";

const ProductListPage = () => {
  return (
    <Layout>
      <ProductListProvider>
        <Flex p={10} gap={10}>
          <Box flex={1}>
            <Filter />
          </Box>

          <Box flex={3}>
            <Flex justifyContent="space-between" mb={5}>
              <Box w="400px">
                <Search />
              </Box>

              <Box w="200px">
                <Sort />
              </Box>
            </Flex>

            <ProductList />
          </Box>
        </Flex>
      </ProductListProvider>
    </Layout>
  );
};

export default ProductListPage;
