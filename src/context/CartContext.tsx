import { createContext, FC, useContext, useState } from "react";

const useCartContextValue = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "Activity playgim",
      name: "Activity playgim",
      amount: 3,
      price: 7488,
      imgUrl: undefined,
    },
    {
      id: "Colorful baby book",
      name: "Colorful baby book",
      amount: 1,
      price: 1738,
      imgUrl: undefined,
    },
    {
      id: "Baby telephone",
      name: "Baby telephone",
      amount: 1,
      price: 3725,
      imgUrl: undefined,
    },
  ]);

  const deleteCartItem = (productId: string) => {
    const itemIdx = cartItems.findIndex((item) => item.id === productId);

    var newItems = [...cartItems];
    newItems.splice(itemIdx, 1);

    setCartItems(newItems);
  };

  return {
    cartItems,
    deleteCartItem,
  };
};

const CartContext = createContext({} as ReturnType<typeof useCartContextValue>);

const CartProvider: FC = ({ children }) => {
  return (
    <CartContext.Provider value={useCartContextValue()}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
