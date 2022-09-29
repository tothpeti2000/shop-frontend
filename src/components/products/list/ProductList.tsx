import { Flex } from "@chakra-ui/layout";
import { useGetProducts } from "../../../api";
import Loading from "../../Loading";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const { data, isLoading } = useGetProducts();

  return (
    <Loading isLoading={isLoading}>
      <Flex justifyContent="space-between" wrap="wrap" rowGap={10}>
        {data?.products!.map((p) => (
          <ProductListItem key={p.id} {...p} />
        ))}
      </Flex>
    </Loading>
  );
};

export default ProductList;
