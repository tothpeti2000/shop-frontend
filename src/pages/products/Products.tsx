import { Flex } from "@chakra-ui/react";
import Filter from "../../components/productFilter/Filter";
import FilterHeader from "../../components/productSort/Sort";
import ProductList from "../../components/productList/ProductList";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

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
