import { CartItemDto } from "../../models";

export const getTotalPrice = (cartItems: CartItemDto[] | null | undefined) => {
  if (!cartItems) {
    return 0;
  }

  return cartItems.reduce((acc, item) => acc + item.price! * item.amount!, 0);
};
