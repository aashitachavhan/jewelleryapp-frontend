import React from "react";

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <span role="img" aria-label="ring" style={{ fontSize: "2rem" }}>💍</span>
      The Jewellery Shop
    </div>
    <nav className="header-nav">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Product</a>
      <a href="#">Blog</a>
    </nav>
    <div className="header-profile">
      <span role="img" aria-label="profile">👤</span>
      Profile
    </div>
  </header>
);

export default Header;
