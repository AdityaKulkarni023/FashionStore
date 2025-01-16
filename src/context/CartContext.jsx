import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      alert('Product is already in the cart');
      return prev;
    });
  };

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      alert('Product is already in the wishlist');
      return prev;
    });
  };

  // Update the quantity of a specific product in the cart
  const updateCartQuantity = (productId, size, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  // Function to remove a specific product from the cart
  const removeFromCart = (productId, size) => {
    setCart((prevCart) => prevCart.filter(item => !(item.id === productId && item.size === size)));
  };

  // **New**: Function to clear the cart
  const clearCart = () => {
    setCart([]); // Resets the cart to an empty array
  };

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      addToWishlist,
      updateCartQuantity,
      removeFromCart,
      clearCart // Include clearCart in the context value
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
