import { useState } from "react";
import { PagedResponse } from "../../interfaces/pagedResponse";
import {
  ProductDetails,
  ProductListItem,
  SortOption,
} from "../../interfaces/product";
import useAPI from "./useAPI";

const useProducts = () => {
  const [page, setPage] = useState(1);
  const client = useAPI();

  const count = 5;
  const sort: SortOption = localStorage.getItem("sortOption") as SortOption;
  const fromPrice = parseFloat(localStorage.getItem("fromPrice")!);
  const toPrice = parseFloat(localStorage.getItem("toPrice")!);

  const getProducts = async () => {
    return await client.get<PagedResponse<ProductListItem>>(
      `/products?page=${page}&count=${count}&sort=${sort}&fromPrice=${fromPrice}&toPrice=${toPrice}`
    );
  };

  const getProductByID = async (ID: number) => {
    return await client.get<ProductDetails>(`/products/${ID}`);
  };

  const getMaxPrice = async () => {
    return await client.get<number>("/products/maxprice");
  };

  return { getProducts, getProductByID, getMaxPrice, page, setPage };
};

export default useProducts;
