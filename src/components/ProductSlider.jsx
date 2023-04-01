import React, { useState } from "react";
import '../styles/product-slider.css'
import bedroom1 from "../images/bedroom1.jpg"
import bedroom2 from "../images/bedroom2.jpg"
import bedroom3 from "../images/bedroom3.jpg"
import bedroom4 from "../images/bedroom4.jpg"
import bedroom5 from "../images/bedroom5.jpg"
import bedroom6 from "../images/bedroom6.jpg"

const ProductSlider = () => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [products, setProducts] = useState([
      { id: 1, name: "Product 1", description: "Description of Product 1", image: {bedroom1} },
      { id: 2, name: "Product 2", description: "Description of Product 2", image: {bedroom2}},
      { id: 3, name: "Product 3", description: "Description of Product 3", image: {bedroom3}},
      { id: 4, name: "Product 4", description: "Description of Product 4", image: {bedroom4}},
      { id: 5, name: "Product 5", description: "Description of Product 5", image: {bedroom5}},
      { id: 6, name: "Product 6", description: "Description of Product 6", image: {bedroom6}},
    ])
    const handleNextClick = () => setCurrentProduct(currentProduct === products.length - 1 ? 0 : currentProduct + 1);
    const handlePrevClick = () => setCurrentProduct(currentProduct === 0 ? products.length - 1 : currentProduct - 1);

    // const products = [
    //   { id: 1, name: "Product 1", description: "Description of Product 1", image: {bedroom1} },
    //   { id: 2, name: "Product 2", description: "Description of Product 2", image: {bedroom2}},
    //   { id: 3, name: "Product 3", description: "Description of Product 3", image: {bedroom3}},
    //   { id: 4, name: "Product 4", description: "Description of Product 4", image: {bedroom4}},
    //   { id: 5, name: "Product 5", description: "Description of Product 5", image: {bedroom5}},
    //   { id: 6, name: "Product 6", description: "Description of Product 6", image: {bedroom6}},
    // ];
    
  
    return (
      <div className="product-slider">
        <h2>{products[currentProduct].name}</h2>
        <img src={products[currentProduct].image} alt={products[currentProduct].name} />
        <p>{products[currentProduct].description}</p>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    );
  };

export default ProductSlider;