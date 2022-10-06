import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useClearCart, useGetCartItems } from "../../api";
import { useCartContext } from "../../context/CartContext";
import { useToggleContext } from "../../context/ToggleContext";
import { bgDark } from "../../styles/styles";
import Loading from "../Loading";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { isLoading } = useGetCartItems({
    query: {
      onSuccess: (data) => updateCartItems(data.cartItems!),
    },
  });

  const { mutateAsync: clearCart } = useClearCart();

  const { cartItems, updateCartItems } = useCartContext();
  const { isOpen, close } = useToggleContext();

  const handleClick = async () => {
    await clearCart();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={close}>
      <DrawerOverlay />
      <DrawerContent textAlign="center">
        <DrawerCloseButton color="white" />
        <DrawerHeader {...bgDark}>Cart</DrawerHeader>

        <Loading isLoading={isLoading}>
          <DrawerBody pos="relative">
            {cartItems.length > 0 ? (
              <>
                <Text
                  pos="sticky"
                  top={0}
                  right={0}
                  textAlign="right"
                  bgColor="inherit"
                  onClick={handleClick}
                >
                  Clear cart
                </Text>
                {cartItems.map((item) => (
                  <Box key={item.id} my={5}>
                    <CartItem
                      id={item.id!}
                      amount={item.amount!}
                      name={item.name!}
                      price={item.price!}
                      imgUrl={item.imgUrl!}
                    />
                  </Box>
                ))}
              </>
            ) : (
              "Your cart is empty"
            )}
          </DrawerBody>

          {cartItems.length > 0 && (
            <DrawerFooter>
              <Box w="100%">
                <Summary
                  total={cartItems.reduce(
                    (acc, item) => acc + item.price! * item.amount!,
                    0
                  )}
                />
              </Box>
            </DrawerFooter>
          )}
        </Loading>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
