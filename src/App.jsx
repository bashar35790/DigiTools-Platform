import React, { Suspense, useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/home-page/Hero'
import Statistic from './component/home-page/Statistic'
import Products from './component/home-page/Products'
import Getstart from './component/home-page/Getstart'
import Pricing from './component/home-page/Pricing'
import Cta from './component/home-page/Cta'
import Footer from './component/home-page/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cardDataLoade = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
}

const cardDataPromise = cardDataLoade();

export default function App() {
  const [cart, setCart] = useState([]); // Array of product objects with 'quantity'
  const [activeView, setActiveView] = useState("available"); // "available" or "cart"

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success(`Increased ${product.name} quantity in cart!`);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(item => item.id === productId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart.`);
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const handleClearCart = () => {
    setCart([]);
    toast.success("Checkout successful! Cart cleared.");
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} setActiveView={setActiveView}></Navbar>
      {activeView === "available" && (
        <>
          <Hero></Hero>
          <Statistic></Statistic>
        </>
      )}
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Products
          cardDataPromise={cardDataPromise}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          activeView={activeView}
          setActiveView={setActiveView}
        />
      </Suspense>
      {activeView === "available" && (
        <>
          <Getstart></Getstart>
          <Pricing></Pricing>
          <Cta></Cta>
        </>
      )}
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </main>
  )
}

