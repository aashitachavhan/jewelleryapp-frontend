import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000, // 5 second timeout
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For demo purposes, using a static user ID
  const userId = "user123";

  // Fetch cart on initial load
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      console.log('Fetching cart...');
      const response = await api.get(`/cart/${userId}`);
      console.log('Cart response:', response.data);
      setCartItems(response.data.items || []);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching cart:', err);
      setError(err.message);
      setLoading(false);
      // Set empty cart on error
      setCartItems([]);
    }
  };

  const addToCart = async (product) => {
    try {
      console.log('Adding to cart:', product);
      const response = await api.post(
        `/cart/${userId}/add/${product.id}`
      );
      console.log('Add to cart response:', response.data);
      setCartItems(response.data.items);
      setError(null);
    } catch (err) {
      console.error('Error adding to cart:', err);
      setError(err.message);
      // Show error to user
      alert('Failed to add item to cart. Please try again.');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      console.log('Removing from cart:', productId);
      const response = await api.delete(
        `/cart/${userId}/remove/${productId}`
      );
      console.log('Remove from cart response:', response.data);
      setCartItems(response.data.items);
      setError(null);
    } catch (err) {
      console.error('Error removing from cart:', err);
      setError(err.message);
      // Show error to user
      alert('Failed to remove item from cart. Please try again.');
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      console.log('Updating quantity:', { productId, quantity });
      const response = await api.put(
        `/cart/${userId}/update/${productId}`,
        null,
        { params: { quantity } }
      );
      console.log('Update quantity response:', response.data);
      setCartItems(response.data.items);
      setError(null);
    } catch (err) {
      console.error('Error updating quantity:', err);
      setError(err.message);
      // Show error to user
      alert('Failed to update quantity. Please try again.');
    }
  };

  const clearCart = async () => {
    try {
      console.log('Clearing cart');
      await api.delete(`/cart/${userId}/clear`);
      setCartItems([]);
      setError(null);
    } catch (err) {
      console.error('Error clearing cart:', err);
      setError(err.message);
      // Show error to user
      alert('Failed to clear cart. Please try again.');
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      error,
      loading
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 