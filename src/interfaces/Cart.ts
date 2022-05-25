import { number } from "yup";
import { ProductDetails } from "./Product";

export interface CartItemProps {
  id: number;
  amount: number;
  product: ProductDetails;
}

export interface CartItemToUpdate {
  itemID: number;
  amount: number;
}

export interface CartSummary {
  total: number;
  onClick: () => void;
}
