import { useState } from "react";
import { SortOption } from "../interfaces/Product";
import { Get, GetByID, MaxPrice } from "../services/ProductService";

const useProducts = () => {
  const [page, setPage] = useState(1);
  const count = 5;

  const GetProducts = (sort: SortOption) => {
    return Get(page, count, sort);
  };

  const GetProductByID = (ID: number) => {
    return GetByID(ID);
  };

  const GetMaxPrice = () => {
    return MaxPrice();
  };

  return { GetProducts, GetProductByID, GetMaxPrice, page, setPage };
};

export default useProducts;
