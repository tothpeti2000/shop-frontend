import { Get } from "../services/ProductService";

const useProducts = () => {
  const GetProducts = () => {
    return Get();
  };

  return { GetProducts };
};

export default useProducts;
