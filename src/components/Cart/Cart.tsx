import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useCartContext } from "../../context/CartContext";
import { useToggleContext } from "../../context/ToggleContext";
import { bgDark } from "../../styles/styles";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { cartItems } = useCartContext();
  const { isOpen, close } = useToggleContext();

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={close}>
      <DrawerOverlay />
      <DrawerContent textAlign="center">
        <DrawerCloseButton color="white" />
        <DrawerHeader {...bgDark}>Cart</DrawerHeader>

        <DrawerBody>
          {cartItems.length > 0
            ? cartItems.map((item) => (
                <Box key={item.id} my={5}>
                  <CartItem {...item} />
                </Box>
              ))
            : "Your cart is empty"}
        </DrawerBody>

        {cartItems.length > 0 && (
          <DrawerFooter>
            <Box w="100%">
              <Summary
                total={cartItems.reduce((acc, item) => acc + item.price, 0)}
              />
            </Box>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
