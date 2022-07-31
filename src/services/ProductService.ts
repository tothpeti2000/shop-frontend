import { useQuery } from "react-query";
import useAPI from "../hooks/api/useAPI";
import { PagedResponse } from "../interfaces/pagedResponse";
import {
  ProductDetails,
  ProductListItem,
  SortOption,
} from "../interfaces/product";

export const Get = (
  page: number = 1,
  count: number = 20,
  sort: SortOption,
  fromPrice: number = 0,
  toPrice: number
) => {
  const client = useAPI();

  return useQuery(["products", page, sort, fromPrice, toPrice], async () => {
    return await client.get<PagedResponse<ProductListItem>>(
      `/products?page=${page}&count=${count}&sort=${sort}&fromPrice=${fromPrice}&toPrice=${toPrice}`
    );
  });
};

export const GetByID = (ID: number) => {
  const client = useAPI();

  return useQuery("productByID", async () => {
    return await client.get<ProductDetails>(`/products/${ID}`);
  });
};

export const MaxPrice = () => {
  const client = useAPI();

  return useQuery("maxPrice", async () => {
    return await client.get<number>("/products/maxprice");
  });
};
