import React from "react";
import "../styles/testimonials.css";
import Ecommerce from "../images/Ecommerce.jpg";
import Quote from "../images/Quote.png";

export default function Testimonials() {
  return (
    <div className="testimonials-container">
        <h1 className="testimonials-bold">Testimonials</h1>
        <p className="testimonials-light">Over 15,000 happy customers.</p>

      <div className="testimonials-inner-container">
        <div className="testimonials-image-container">
          <img src={Quote} alt="image" id="quote-img" />
          <img src={Ecommerce} alt="image" id="ecommerce-img" />
        </div>
        <div className="testimonials-content-container">
          <p>
            “My experience with this website is a complete sucess, from customer
            service, wide range of products, clean store, purchasing experience,
            the newsletter. Thank you.”
          </p>
          <div className="testimonials-content-container-h3">
            <h3>Leona Paul</h3>
            <p>CEO of Floatcom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
