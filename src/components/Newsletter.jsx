import React from "react";
import "../styles/newsletter.css";
export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-img"></div>
      <div className="newsletter-content">
        <div className="h2-content">
          <h2 id="h2-content-h2">Join Our <span id="bold"> Newsletter</span> </h2>
          <p id="h2-content-p">
            Recieve exclusive deals, discounts and many offers
          </p>
        </div>
        <div className="mail-content">
          <input type="email" placeholder="Enter Your Email" id="mail-content-email" />
          <button id="mail-content-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
