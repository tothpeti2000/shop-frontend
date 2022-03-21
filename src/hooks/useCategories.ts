import { useState } from "react";
import { CategoryCover } from "../interfaces/Category";
import CategoryService from "../services/CategoryService";

const useCategories = () => {
  const [categoryCovers, setCategoryCovers] = useState<CategoryCover[]>([]);

  const FetchCategories = async () => {
    await CategoryService.FetchCategories();
  };

  const FetchTopCategories = async () => {
    await CategoryService.FetchTopCategories();
  };

  return { categoryCovers, FetchCategories, FetchTopCategories };
};

export default useCategories;
