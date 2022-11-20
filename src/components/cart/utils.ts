import { CartItemDto } from "../../models";

export const getTotalPrice = (cartItems: CartItemDto[] | null | undefined) => {
  if (!cartItems) {
    return 0;
  }

  return cartItems.reduce((acc, item) => acc + item.price! * item.amount!, 0);
};

export const formatPrice = (price: number | undefined) => {
  if (price === undefined) {
    return "$0.00";
  }

  return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
};
