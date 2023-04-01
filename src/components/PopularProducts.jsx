import React from "react";
import ProductCard from "./ProductCard";
import "../styles/popularProducts.css";
import chair1 from "../images/chair1.png";
import chair2 from "../images/chair2.png";
import chair3 from "../images/chair3.png";
import chair4 from "../images/chair4.png";
import Button from "./Button.jsx";
export default function PopularProducts() {
  return (
    <div className="popular-product-container">
      <h2 id="popular-product-h2">Popular products</h2>
      <div className="popular-product-cards">
        <ProductCard
          image={chair1}
          heading="Arm Chair"
          para="Light single chair"
          span="$125"
        />
        <ProductCard
          image={chair2}
          heading="Arm Chair"
          para="Light single chair"
          span="$125"
        />
        <ProductCard
          image={chair3}
          heading="Arm Chair"
          para="Light single chair"
          span="$125"
        />
        <ProductCard
          image={chair4}
          heading="Arm Chair"
          para="Light single chair"
          span="$125"
        />
      </div>
      <Button className="btn btn-explore" name="Explore all items" />
    </div>
  );
}
