import { Get, MaxPrice } from "../services/ProductService";

const useProducts = () => {
  const GetProducts = () => {
    return Get();
  };

  const GetMaxPrice = () => {
    return MaxPrice();
  };

  return { GetProducts, GetMaxPrice };
};

export default useProducts;
