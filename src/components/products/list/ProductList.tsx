import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useGetProducts } from "../../../api";
import { useProductListContext } from "../../../context/ProductListContext";
import Loading from "../../Loading";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const {
    priceRange,
    sortOption,
    searchQuery,
    categories,
    page,
    count,
    updateTotalPages,
  } = useProductListContext();

  const { data, isLoading } = useGetProducts(
    {
      Name: searchQuery,
      FromPrice: priceRange[0],
      ToPrice: priceRange[1],
      CategoryIds: categories,
      OrderBy: sortOption,
      Page: page,
      Count: count,
    },
    {
      query: {
        onSuccess: (data) => updateTotalPages(data.totalPages ?? 1),
      },
    }
  );

  return (
    <Loading isLoading={isLoading}>
      <Flex justifyContent="space-around" wrap="wrap" rowGap={10}>
        {data?.items!.length! > 0 ? (
          data?.items!.map((p) => <ProductListItem key={p.id} {...p} />)
        ) : (
          <Text fontSize="lg">No products found</Text>
        )}
      </Flex>
    </Loading>
  );
};

export default ProductList;
