import React, { createContext, useContext, useEffect, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart-items")) || []
  );
  const { showSidebar, newItemsAdded, setNewItemsAdded } =
    useContext(SidebarContext);

  // Store the cart in the local storage
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  function findItemById(items, id) {
    return items.find((i) => {
      return i.id === id;
    });
  }

  function addItemToCart(product, id) {
    const cartItem = findItemById(cartItems, id);
    if (cartItem) {
      // If the product is already in the cart
      const newCart = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newCart);
    } else {
      // If the product is not in the cart
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    handleNewItemsAdded();
  }

  function handleNewItemsAdded() {
    !showSidebar // If the sidbar is not open
      ? setNewItemsAdded({
          ...newItemsAdded,
          state: true,
          number: newItemsAdded.number + 1,
        })
      : setNewItemsAdded({ ...newItemsAdded, state: false }); // Do nothing if the sidebar is open;
  }

  function deleteItemFromCart(id) {
    const newCart = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(newCart);
  }

  function increaseAmount(id) {
    const cartItem = findItemById(cartItems, id);
    // Add the item to increase the amount
    addItemToCart(cartItem, id);
  }

  function decreaseAmount(id) {
    const cartItem = findItemById(cartItems, id);
    if (cartItem.amount > 1) {
      const newCart = cartItems.map((item) => {
        if (cartItem.id === item.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCartItems(newCart);
    } else {
      // Delete the item if the amount is 0
      deleteItemFromCart(cartItem.id);
    }
  }

  function totalPrice() {
    const total = [...cartItems].reduce((tot, item) => {
      const itemPrice = item.price * item.amount;
      return tot + itemPrice;
    }, 0);
    return total;
  }

  function totalItems() {
    const itemsAmount = [...cartItems].reduce((totAmount, item) => {
      return totAmount + item.amount;
    }, 0);
    return itemsAmount;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        deleteItemFromCart,
        increaseAmount,
        decreaseAmount,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
