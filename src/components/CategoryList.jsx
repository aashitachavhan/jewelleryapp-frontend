import React from "react";
import ringImg from "../assets/ring.png";      // Add your own images in assets
import chainImg from "../assets/chain.png";
import bangleImg from "../assets/bangle.png";
import earringImg from "../assets/earring.png";

const categories = [
  { name: "Rings", img: ringImg },
  { name: "Chain", img: chainImg },
  { name: "Bangles", img: bangleImg },
  { name: "Earrings", img: earringImg },
];

const CategoryList = () => (
  <div className="category-list">
    {categories.map((cat) => (
      <div className="category-item" key={cat.name}>
        <img src={cat.img} alt={cat.name} />
        {cat.name}
      </div>
    ))}
  </div>
);

export default CategoryList;
