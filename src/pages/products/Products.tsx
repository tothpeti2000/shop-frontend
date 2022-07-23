import { Flex } from "@chakra-ui/react";
import Filter from "../../components/products/productFilter/Filter";
import FilterHeader from "../../components/products/productSort/Sort";
import ProductList from "../../components/products/productList/ProductList";
import NavBar from "../../components/common/navBar/NavBar";
import Footer from "../../components/common/footer/Footer";

const Products = () => {
  return (
    <>
      <NavBar />
      <Flex direction="column" p={10}>
        <FilterHeader />
        <Flex>
          <Filter />
          <ProductList />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Products;
