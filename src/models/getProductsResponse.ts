/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Shop API
 * OpenAPI spec version: v1
 */
import type { ProductDto } from "./productDto";

export interface GetProductsResponse {
  items?: ProductDto[] | null;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
}
