import { useState } from "react";
import ProductService from "../services/ProductService";

const useProducts = () => {
  const [maxPrice, setMaxPrice] = useState(0);

  const FetchMaxPrice = async () => {
    await ProductService.GetMaxPrice();
  };

  return { FetchMaxPrice };
};

export default useProducts;
