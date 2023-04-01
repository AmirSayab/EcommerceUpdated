import React from "react";
import "../styles/sidebarSlider.css";
import searchicon from "../images/searchicon.png";
import Button from "./Button";
export default function SidebarSlider() {
  return (
    <div className="sidenav">
      <div className="searchbox">
        <img src={searchicon} alt="searchicon" id="searchicon" />
        <input type="text" placeholder="Search" id="search-box" />
      </div>
      <div className="scrollbar-items">
        <a href="#">Bedroom</a>
        <a href="#">Dinning Room</a>
        <a href="#">Meeting Room</a>
        <a href="#">Workspace</a>
        <a href="#">Living Room</a>
        <a href="#">Kitchen</a>
        <a href="#">Living Space</a>
        <a href="#">Bedroom</a>
        <a href="#">Dinning Room</a>
        <a href="#">Meeting Room</a>
        <a href="#">Workspace</a>
        <a href="#">Living Room</a>
        <a href="#">Bedroom</a>
        <a href="#">Dinning Room</a>
        <a href="#">Meeting Room</a>
      </div>
      <div>
        <Button className="btn category-btn" name="All Categories" />
      </div>
    </div>
  );
}
