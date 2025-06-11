import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Hero />
        <div className="category-section">
          <CategoryList />
          <div className="search-bar">
            <input type="text" placeholder="Search for jewellery" />
          </div>
        </div>
        <div className="main-content">
          <ProductGrid />
          <CartSidebar />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
