import { useQuery } from "react-query";
import client from "../api/client";
import { CategoryCover, CategoryItem } from "../interfaces/category";

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
