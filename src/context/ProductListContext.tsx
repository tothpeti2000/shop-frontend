import React, { createContext, FC, useContext, useState } from "react";
import { Product } from "../components/ProductList/ProductListItem";

const useProductListContextValue = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  const InitProducts = (products: Product[]) => {
    setProducts(products);
    setAllProducts(products);
    localStorage.setItem("filterType", "all");
    localStorage.setItem("sortType", "none");
  };

  const UpdateProducts = () => {
    const filtered = FilterProducts();
    const sorted = SortProducts(filtered);

    setProducts(sorted);
  };

  const FilterProducts = () => {
    const priceFiltered = [...allProducts].filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    const filterType = localStorage.getItem("filterType");

    return priceFiltered.filter(
      (p) => p.category === filterType || filterType === "all"
    );
  };

  const SortProducts = (filtered: Product[]) => {
    const sortType = localStorage.getItem("sortType");

    if (sortType === "priceLTH") {
      filtered = filtered.sort((p1, p2) => {
        return p1.price - p2.price;
      });
    }

    if (sortType === "priceHTL") {
      filtered = filtered.sort((p1, p2) => {
        return p2.price - p1.price;
      });
    }

    if (sortType === "nameAZ") {
      filtered = filtered.sort((p1, p2) => {
        const p1Name = p1.name.toLowerCase();
        const p2Name = p2.name.toLowerCase();

        if (p1Name < p2Name) {
          return -1;
        }

        if (p1Name > p2Name) {
          return 1;
        }

        return 0;
      });
    }

    if (sortType === "nameZA") {
      filtered = filtered.sort((p1, p2) => {
        const p1Name = p1.name.toLowerCase();
        const p2Name = p2.name.toLowerCase();

        if (p1Name > p2Name) {
          return -1;
        }

        if (p1Name < p2Name) {
          return 1;
        }

        return 0;
      });
    }

    return [...filtered];
  };

  const UpdateSortType = (type: string) => {
    localStorage.setItem("sortType", type);
    UpdateProducts();
  };

  const UpdateFilterType = (type: string) => {
    localStorage.setItem("filterType", type);
    UpdateProducts();
  };

  const UpdatePriceRange = (range: Array<number>) => {
    console.log(range);
    setPriceRange(range);
    UpdateProducts();
  };

  return {
    products,
    InitProducts,
    UpdateSortType,
    UpdateFilterType,
    UpdatePriceRange,
  };
};

const ProductListContext = createContext(
  {} as ReturnType<typeof useProductListContextValue>
);

const useProductListContext = () => useContext(ProductListContext);

const ProductListProvider: FC = ({ children }) => {
  return (
    <ProductListContext.Provider value={useProductListContextValue()}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListContext, ProductListProvider, useProductListContext };
