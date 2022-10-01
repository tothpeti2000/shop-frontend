import { createContext, FC, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { getGetProductsQueryKey } from "../api";

const useProductListContextValue = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const queryCache = useQueryClient();

  const updatePriceRange = (range: [number, number]) => {
    setPriceRange(range);
    resetPage();
    refreshProducts();
  };

  const updateSortOption = (option: string) => {
    setSortOption(option);
    resetPage();
    refreshProducts();
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    resetPage();
    refreshProducts();
  };

  const updatePage = (page: number) => {
    setPage(page);
    refreshProducts();
  };

  const updateTotalPages = (totalPages: number) => {
    setTotalPages(totalPages);
  };

  const refreshProducts = () =>
    queryCache.invalidateQueries(getGetProductsQueryKey());

  const resetPage = () => setPage(1);

  return {
    priceRange,
    sortOption,
    searchQuery,
    page,
    totalPages,
    updatePriceRange,
    updateSortOption,
    updateSearchQuery,
    updatePage,
    updateTotalPages,
  };
};

const ProductListContext = createContext(
  {} as ReturnType<typeof useProductListContextValue>
);

const ProductListProvider: FC = ({ children }) => {
  return (
    <ProductListContext.Provider value={useProductListContextValue()}>
      {children}
    </ProductListContext.Provider>
  );
};

const useProductListContext = () => useContext(ProductListContext);

export { ProductListProvider, useProductListContext };
