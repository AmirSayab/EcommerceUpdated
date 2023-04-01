import React from "react";
import "../styles/category.css";
import bedroom1 from "../images/bedroom1.jpg";
import bedroom2 from "../images/bedroom2.jpg";
import bedroom3 from "../images/bedroom3.jpg";
import bedroom4 from "../images/bedroom4.jpg";
import bedroom5 from "../images/bedroom5.jpg";
import bedroom6 from "../images/bedroom6.jpg";
// import DropdownMenu from './DropdownMenu'
import SidebarSlider from "./SidebarSlider";
import Imagecomponent from "./Imagecomponent";
import Scrollablelist from "./Scrollablelist";
export default function Category() {
  return (
    <div className="main-cont">
      <h2 id="main-cont-h2">Explore By Category</h2>
      <div className="category-container">
        <div className="sidebar-container">
          <SidebarSlider />
        </div>
        <div className="category-image-container">
          <img src={bedroom1} />

          <img src={bedroom2} />

          <img src={bedroom3} />

          <img src={bedroom4} />

          <img src={bedroom5} />

          <img src={bedroom6} />
          {/* <Imagecomponent /> */}
        </div>
      </div>
    </div>
  );
}
