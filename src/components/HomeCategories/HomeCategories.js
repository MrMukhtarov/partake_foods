import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeCategories.css";

const HomeCategories = () => {
  //LEFT
  const leftEnter = () => {
    document.getElementById("leftimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_hover.png?v=1642494021";
    document.getElementById('leftimg').classList.toggle('transition')
    document.getElementById("left").classList.toggle("transition")
  };
  const leftLeave = () => {
    document.getElementById("leftimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_192f868f-c8ff-4c35-afb6-90de5212800e.png?v=1642493984";

  };
  //LEFT
  //CENTER
  const centerEnter = () => {
    document.getElementById("centerimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_hover_307b1e1f-cb39-4684-9a7c-39b569637552.png?v=1642494106";
  };
  const centerLeave = () => {
    document.getElementById("centerimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_0a2c96b7-42ca-4c51-9a52-5b1faf7fcc82.png?v=1642494077";
  };
  //CENTER
  //RIGHT
  const rightEnter = () => {
    document.getElementById("rightimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_hover_a41491bf-d6b4-4bd2-9515-d57cbe4e874f.png?v=1642494190";
  };
  const rightLeave = () => {
    document.getElementById("rightimg").src =
      "https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_ad99e55f-58d3-46f2-b086-e2173be4814d.png?v=1642494158";
  };
  //RIGHT

  return (
    <div id="homeCtr">
      <div className="all d-flex">
        {/* Left */}
        <div
          onMouseEnter={leftEnter}
          onMouseLeave={leftLeave}
          className="left col-lg-4 col-12"
          id="left"
        >
          <NavLink to="/">
            <h2>Cookies</h2>
            <NavLink to="/" className="shop">
              SHOP NOW
            </NavLink>
            <br />
            <img
              id="leftimg"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_192f868f-c8ff-4c35-afb6-90de5212800e.png?v=1642493984"
              alt="img"
            />
          </NavLink>
        </div>
        {/* Left */}
        {/* --------- */}
        {/* CENTER */}
        <div
          onMouseEnter={centerEnter}
          onMouseLeave={centerLeave}
          className="center col-lg-4 col-12"
        >
          <NavLink to="/">
            <h2>Breakfast Mixes</h2>
            <NavLink to="/" className="shop">
              SHOP NOW
            </NavLink>
            <img
              id="centerimg"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_0a2c96b7-42ca-4c51-9a52-5b1faf7fcc82.png?v=1642494077"
              alt="img"
            />
          </NavLink>
        </div>
         {/* CENTER */}
         {/* ----------- */}
         {/* RIGHT */}
        <div
          onMouseEnter={rightEnter}
          onMouseLeave={rightLeave}
          className="right col-lg-4 col-12"
        >
          <NavLink to="/">
            <h2>Baking Mixes</h2>
            <NavLink to="/" className="shop">
              SHOP NOW
            </NavLink>
            <img
              id="rightimg"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_ad99e55f-58d3-46f2-b086-e2173be4814d.png?v=1642494158"
              alt="img"
            />
          </NavLink>
        </div>
        {/* RIGHT */}
      </div>
    </div>
  );
};

export default HomeCategories;
