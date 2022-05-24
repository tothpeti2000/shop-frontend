import { useQuery } from "react-query";
import client from "../api/common";
import { PagedResponse } from "../interfaces/PagedResponse";
import {
  ProductDetails,
  ProductListItem,
  SortOption,
} from "../interfaces/Product";

export const Get = (
  page: number = 1,
  count: number = 20,
  sort: SortOption,
  fromPrice: number = 0,
  toPrice: number
) => {
  return useQuery(["products", page, sort, fromPrice, toPrice], async () => {
    return await client.get<PagedResponse<ProductListItem>>(
      `/products?page=${page}&count=${count}&sort=${sort}&fromPrice=${fromPrice}&toPrice=${toPrice}`
    );
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
