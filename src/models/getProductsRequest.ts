/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Shop API
 * OpenAPI spec version: v1
 */

export interface GetProductsRequest {
  page?: number;
  count?: number;
  orderBy?: string | null;
  name?: string | null;
  fromPrice?: number;
  toPrice?: number;
  categoryIds?: string[] | null;
}
