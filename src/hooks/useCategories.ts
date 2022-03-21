import { useState } from "react";
import { CategoryCover, CategoryListItem } from "../interfaces/Category";
import CategoryService from "../services/CategoryService";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryListItem[]>([]);
  const [categoryCovers, setCategoryCovers] = useState<CategoryCover[]>([]);

  const FetchCategories = async () => {
    await CategoryService.FetchCategories();
  };

  const FetchTopCategories = async () => {
    await CategoryService.FetchTopCategories();
  };

  return { categories, categoryCovers, FetchCategories, FetchTopCategories };
};

export default useCategories;
