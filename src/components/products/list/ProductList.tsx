import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useGetProducts } from "../../../api";
import { useProductListContext } from "../../../context/ProductListContext";
import { ToggleProvider } from "../../../context/ToggleContext";
import useUserCredentials from "../../../hooks/useUserCredentials";
import Loading from "../../Loading";
import AddToSharedCartDialog from "../AddToSharedCartDialog";
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

  const { token } = useUserCredentials();

  return (
    <Loading isLoading={isLoading}>
      <Flex justifyContent="space-around" wrap="wrap" rowGap={10}>
        {data?.items && data.items.length > 0 ? (
          data.items.map((p) => (
            <ToggleProvider key={p.id}>
              <ProductListItem {...p} />
              {token !== null && <AddToSharedCartDialog productId={p.id!} />}
            </ToggleProvider>
          ))
        ) : (
          <Text fontSize="lg">No products found</Text>
        )}
      </Flex>
    </Loading>
  );
};

export default ProductList;
