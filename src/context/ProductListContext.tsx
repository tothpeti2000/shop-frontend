import { createContext, FC, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { getGetProductsQueryKey } from "../api";

const useProductListContextValue = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);
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

  const updateCategories = (categories: string[]) => {
    setCategories(categories);
    resetPage();
    refreshProducts();
  };

  const updatePage = (page: number) => {
    setPage(page);
    refreshProducts();
  };

  const updateCount = (count: number) => {
    setCount(count);
    resetPage();
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
    categories,
    page,
    count,
    totalPages,
    updatePriceRange,
    updateSortOption,
    updateSearchQuery,
    updateCategories,
    updatePage,
    updateCount,
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
