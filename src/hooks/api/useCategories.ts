import { CategoryCover, CategoryItem } from "../../interfaces/category";
import { client } from "../../api/client";

const useCategories = () => {
  const getCategories = async () => {
    return await client.get<CategoryItem[]>("/categories");
  };

  const getTopCategories = async () => {
    return await client.get<CategoryCover[]>("/categories/top");
  };

  return { getCategories, getTopCategories };
};

export default useCategories;
