import React from "react";

const CartSidebar = () => (
  <aside className="cart-sidebar">
    <h3>
      Product Details &nbsp;&nbsp;&nbsp; No. of Items
    </h3>
    <div className="cart-list">
      {/* Example cart items */}
      {/* <div className="cart-item">
        <span>Diamond Ring</span>
        <span>1</span>
      </div> */}
    </div>
    <div className="total">
      <span>Total Price</span>
      <span>$0</span>
    </div>
  </aside>
);

export default CartSidebar;
