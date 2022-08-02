export interface CartItemProps {
  id: number;
  amount: number;
  name: string;
  price: number;
}

export interface CartItemToUpdate {
  itemID: number;
  amount: number;
}

export interface CartSummary {
  total: number;
  onClick: () => void;
}

export interface CartItemToAdd {
  productID: number;
  amount: number;
}
