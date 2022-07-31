import { Get, GetTop } from "../../services/CategoryService";

const useCategories = () => {
  const GetCategories = () => {
    return Get();
  };

  const GetTopCategories = () => {
    return GetTop();
  };

  return { GetCategories, GetTopCategories };
};

export default useCategories;
