import { useQuery } from "react-query";
import client from "../api/common";
import { CategoryCover, CategoryItem } from "../interfaces/Category";

export const Get = () => {
  return useQuery("categories", async () => {
    return await client.get<CategoryItem[]>("/categories");
  });
};

export const GetTop = () => {
  return useQuery("topCategories", async () => {
    return await client.get<CategoryCover[]>("/categories/top");
  });
};
