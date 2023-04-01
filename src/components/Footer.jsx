import React from "react";
import "../styles/footers.css";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import EcommerceLogo from "../images/EcommerceLogo.svg";

export default function Footer() {
  return (
    <div className="footer-content-all">
      <div className="footer-company">
        <img src={EcommerceLogo} alt="" className="footer-comlogo" />
        <div>
          <img
            src={facebook}
            alt="fblogo"
            className="footer-icons"
            id="icon-fb"
          />
          <img src={linkedin} alt="instalogo" className="footer-icons" />
          <img src={instagram} alt="linkinlogo" className="footer-icons" />
          <img src={twitter} alt="websitelogo" className="footer-icons" />
          {/* <img src="" alt="twitterlogo" /> */}
        </div>
        <div className="footer-address">
          <h3 className="footer-heading">Address</h3>
          <p className="footer-sub-heading">+123 456 789</p>
          <p className="footer-sub-heading">877 The bronx, NY</p>
          <p className="footer-sub-heading">14568, US</p>
          <p className="footer-sub-heading" id="copyright-para">
            Copright 2023, All rights reserved
          </p>
        </div>
      </div>
      <div className="footer-content-side">
        <div className="footer-myaccount">
          <h3 className="footer-heading">My Account</h3>
          <h4 className="footer-sub-heading">Sign in</h4>
          <h4 className="footer-sub-heading">Register</h4>
          <h4 className="footer-sub-heading">Order Status</h4>
        </div>
        <div className="footer-help">
          <h3 className="footer-heading">Help</h3>
          <h4 className="footer-sub-heading">Shipping</h4>
          <h4 className="footer-sub-heading">Returns</h4>
          <h4 className="footer-sub-heading">Sizing</h4>
        </div>
        <div className="footer-shop">
          <h3 className="footer-heading">Shop</h3>
          <h4 className="footer-sub-heading">All products</h4>
          <h4 className="footer-sub-heading">Bedroom</h4>
          <h4 className="footer-sub-heading">Dinning Room</h4>
        </div>
        <div className="footer-faq">
          <h3 className="footer-heading">FAQ</h3>
          <h4 className="footer-sub-heading">Shipping & Delivery</h4>
          <h4 className="footer-sub-heading">Terms & Condition</h4>
          <h4 className="footer-sub-heading">Privacy & Policy</h4>
        </div>
      </div>
    </div>
  );
}
