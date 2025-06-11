import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products/")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (products.length === 0) return <div>No products available.</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="product-title">{product.name}</div>
          <div className="product-price">${product.price}</div>
          <div className="wishlist" title="Add to wishlist">♡</div>
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
