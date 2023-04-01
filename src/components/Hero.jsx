import React from "react";
import "../styles/hero.css";
import Button from "./Button";
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <section className="hero-container">
      <Navbar />
      <div className="text-container">
        <h1>Exclusive Deals of Furniture Collection</h1>
        <p>Explore different categories. Find the best deals.</p>
        <Button className="btn" name="Shop Now" />
      </div>
    </section>
  );
}
