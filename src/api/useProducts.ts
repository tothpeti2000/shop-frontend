import { Get, GetByID, MaxPrice } from "../services/ProductService";

const useProducts = () => {
  const GetProducts = () => {
    return Get();
  };

  const GetProductByID = (ID: number) => {
    return GetByID(ID);
  };

  const GetMaxPrice = () => {
    return MaxPrice();
  };

  return { GetProducts, GetProductByID, GetMaxPrice };
};

export default useProducts;
