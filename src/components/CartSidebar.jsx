import React from "react";
import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <aside className="cart-sidebar">
      <h3>Your Cart</h3>
      <div className="cart-list">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.product_id}>
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)}>+</button>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.product_id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="total">
        <span>Total:</span>
        <span>${getTotalPrice()}</span>
      </div>
    </aside>
  );
};

export default CartSidebar;
