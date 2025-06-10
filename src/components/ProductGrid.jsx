import React, { useEffect, useState } from "react";
import axios from "axios";
import diamondRingImg from "../assets/diamond_ring.jpg";
import earringsImg from "../assets/earrings.jpg";
import goldBanglesImg from "../assets/gold_bangles.jpg";
import flowerEarringsImg from "../assets/flower_earrings.jpg";
import ringImg from "../assets/ring.jpg";
import chainImg from "../assets/chain.jpg";

const products = [
  { name: "Diamond Ring", price: 10000, image: diamondRingImg },
  { name: "Earings", price: 8000, image: earringsImg },
  { name: "Gold Bangles", price: 15000, image: goldBanglesImg },
  { name: "Flower Earings", price: 7500, image: flowerEarringsImg },
  { name: "Ring", price: 4500, image: ringImg },
  { name: "Chain", price: 100000, image: chainImg },
];

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="product-card" key={product.name}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="product-title">{product.name}</div>
          <div className="product-price">${product.price}</div>
          <div className="wishlist" title="Add to wishlist">♡</div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
