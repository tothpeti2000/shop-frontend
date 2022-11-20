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
import { useGetCartItems } from "../../api";
import { useCartContext } from "../../context/CartContext";
import { useToggleContext } from "../../context/ToggleContext";
import { bgDark } from "../../styles/styles";
import Loading from "../Loading";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { getTotalPrice } from "./utils";

const Cart = () => {
  const { isLoading } = useGetCartItems({
    query: {
      onSuccess: (data) => updateCartItems(data.cartItems!),
    },
  });

  const { cartItems, updateCartItems } = useCartContext();
  const { isOpen, close } = useToggleContext();

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={close}>
      <DrawerOverlay />
      <DrawerContent textAlign="center">
        <DrawerCloseButton color="white" />
        <DrawerHeader {...bgDark}>Cart</DrawerHeader>

        <Loading isLoading={isLoading}>
          <DrawerBody>
            {cartItems.length > 0
              ? cartItems.map((item) => (
                  <Box key={item.id} my={5}>
                    <CartItem
                      id={item.id!}
                      amount={item.amount!}
                      name={item.name!}
                      price={item.price!}
                      imgUrl={item.imgUrl!}
                    />
                  </Box>
                ))
              : "Your cart is empty"}
          </DrawerBody>

          {cartItems.length > 0 && (
            <DrawerFooter>
              <Box w="100%">
                <Summary total={getTotalPrice(cartItems)} />
              </Box>
            </DrawerFooter>
          )}
        </Loading>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
