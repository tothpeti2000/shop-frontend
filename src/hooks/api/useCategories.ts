import { CategoryCover, CategoryItem } from "../../interfaces/category";
import useAPI from "./useAPI";

const useCategories = () => {
  const client = useAPI();

  const getCategories = async () => {
    return await client.get<CategoryItem[]>("/categories");
  };

  const getTopCategories = async () => {
    return await client.get<CategoryCover[]>("/categories/top");
  };

  return { getCategories, getTopCategories };
};

export default useCategories;
