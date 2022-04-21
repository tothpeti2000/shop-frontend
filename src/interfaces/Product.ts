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
