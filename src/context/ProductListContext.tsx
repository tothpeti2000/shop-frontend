import { createContext, FC, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { getGetProductsQueryKey } from "../api";
import { SortOption } from "../models/sortOption";

const useProductListContextValue = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortOption, setSortOption] = useState<SortOption | null>(null);

  const queryCache = useQueryClient();

  const updatePriceRange = (range: [number, number]) => {
    setPriceRange(range);
    queryCache.invalidateQueries(getGetProductsQueryKey());

    printDetails();
  };

  const updateSortOption = (option: SortOption | null) => {
    setSortOption(option);
    queryCache.invalidateQueries(getGetProductsQueryKey());

    printDetails();
  };

  const printDetails = () => {
    console.log(priceRange, sortOption);
  };

  return {
    priceRange,
    sortOption,
    updatePriceRange,
    updateSortOption,
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
