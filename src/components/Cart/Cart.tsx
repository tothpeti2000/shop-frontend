import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import useCart from "../../api/useCart";
import { useToggleContext } from "../../context/ToggleContext";
import { CartItemProps } from "../../interfaces/cart";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { isOpen, close } = useToggleContext();
  const { GetCartItems } = useCart();
  const { data } = GetCartItems();

  const cartItems: CartItemProps[] = [
    {
      id: 1,
      name: "Activity playgim",
      amount: 3,
      price: 7488,
    },
    {
      id: 2,
      name: "Colorful baby book",
      amount: 1,
      price: 1738,
    },
    {
      id: 3,
      name: "Baby telephone",
      amount: 1,
      price: 3725,
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={close}>
      <DrawerOverlay />
      <DrawerContent textAlign="center">
        <DrawerCloseButton color="white" />
        <DrawerHeader bgColor="black" color="white">
          Cart
        </DrawerHeader>

        <DrawerBody>
          {cartItems.length > 0
            ? cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })
            : "Cart is empty"}
        </DrawerBody>

        <DrawerFooter>
          <Summary
            total={cartItems.reduce((acc, item) => acc + item.price, 0)}
            onClick={close}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
