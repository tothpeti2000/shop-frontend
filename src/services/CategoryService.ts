import { useQuery } from "react-query";
import useAPI from "../hooks/api/useAPI";
import { CategoryCover, CategoryItem } from "../interfaces/category";

export const Get = () => {
  const client = useAPI();

  return useQuery("categories", async () => {
    return await client.get<CategoryItem[]>("/categories");
  });
};

export const GetTop = () => {
  const client = useAPI();

  return useQuery("topCategories", async () => {
    return await client.get<CategoryCover[]>("/categories/top");
  });
};
