import { Flex } from "@chakra-ui/react";
import Filter from "../components/ProductFilter/Filter";
import FilterHeader from "../components/ProductSort/Sort";
import ProductList from "../components/ProductList/ProductList";
import { ProductListProvider } from "../context/ProductListContext";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Products = () => {
  return (
    <>
      <NavBar />
      <Flex direction="column" p={10}>
        <ProductListProvider>
          <FilterHeader />
          <Flex>
            <Filter />
            <ProductList />
          </Flex>
        </ProductListProvider>
      </Flex>
      <Footer />
    </>
  );
};

export default Products;
