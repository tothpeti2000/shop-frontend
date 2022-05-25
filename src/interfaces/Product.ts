export interface ProductListItem {
  id: number;
  name: string;
  price: number;
  stock: number;
  imgURL?: string;
}

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  averageRating: number;
  imgURL?: string;
}

export interface CartItemToAdd {
  productID: number;
  amount: number;
}

export type SortOption = "nameAZ" | "nameZA" | "priceLTH" | "priceHTL" | "all";
