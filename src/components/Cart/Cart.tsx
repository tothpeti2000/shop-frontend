import { useDisclosure } from "@chakra-ui/hooks";
import {
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../api/useCart";
import { CartItemProps } from "../../interfaces/Cart";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { GetCartItems } = useCart();
  const { isLoading, data, isError, error } = GetCartItems();

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
    <>
      <IconButton
        aria-label="Cart"
        colorScheme="yellow"
        icon={<Icon as={FaShoppingCart} boxSize="80%" />}
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Badge>{data?.data.length}</Badge>

      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
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
              onClick={onClose}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
