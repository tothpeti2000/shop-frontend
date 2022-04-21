import { useQuery } from "react-query";
import client from "../api/common";
import { PagedResponse } from "../interfaces/PagedResponse";
import { ProductDetails, ProductListItem } from "../interfaces/Product";

export const Get = () => {
  return useQuery("products", async () => {
    return await client.get<PagedResponse<ProductListItem>>("/products");
  });
};

export const GetByID = (ID: number) => {
  return useQuery("productByID", async () => {
    return await client.get<ProductDetails>(`/products/${ID}`);
  });
};

export const MaxPrice = () => {
  return useQuery("maxPrice", async () => {
    return await client.get<number>("/products/maxprice");
  });
};
