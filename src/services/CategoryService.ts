import { useQuery } from "react-query";
import client from "../api/common";
import { CategoryCover } from "../interfaces/Category";

export const GetTop = () => {
  return useQuery("categories", async () => {
    return await client.get<CategoryCover[]>("/categories/top");
  });
};
