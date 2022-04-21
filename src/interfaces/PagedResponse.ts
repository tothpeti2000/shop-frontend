export interface PagedResponse<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
