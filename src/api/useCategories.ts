import { GetTop } from "../services/CategoryService";

const useCategories = () => {
  const GetTopCategories = () => {
    return GetTop();
  };

  return { GetTopCategories };
};

export default useCategories;
