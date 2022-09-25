import { createContext, FC, useContext, useState } from "react";

const useProductListContextValue = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);

  return {
    setPriceRange,
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
