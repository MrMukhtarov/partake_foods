import React from "react";
import { NavLink } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <img className="leftImg" src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/cook-13.png?v=1640691667" alt="" />
      <div className="all row">
        <div className="left col-lg-6">
          <div className="top col-lg-12">
            <div className="left col-lg-5 gap-1">
              <NavLink to="/">FAQ</NavLink>
              <NavLink to="/">CONTACT</NavLink>
              <NavLink to="/">BLOG</NavLink>
              <NavLink to="/">LOYALITY PROGRAM</NavLink>
              <NavLink to="/">SITEMAP</NavLink>
            </div>
            <div className="Leftsright col-lg-5 gap-1">
              <NavLink to="">PRESS</NavLink>
              <NavLink to="">TERMS</NavLink>
              <NavLink to="">PRIVACY</NavLink>
              <NavLink to="">SHIPPING & RETURNS</NavLink>
            </div>
          </div>
          <div className="bottom col-lg-12 mt-4">
            <div className="boxes">
            <div className="box">
              <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>
            </div>
            <div className="box">
              <i class="fa-solid fa-u"></i>
            </div>
            <div className="box">
              <i class="fa-solid fa-0"></i>
            </div>
            <div className="box">
              <i class="fa-solid fa-seedling"></i>
            </div>
            <div className="box">
              <i class="fa-solid fa-b"></i>
            </div>
            </div>
            <div className="copyright ms-2">Copyright © 2023 Partake Foods</div>
          </div>
        </div>
        <div className="right col-lg-5">
            <h5>Be in the Know.</h5>
            <div className="icons">
            <NavLink to='/'><i class="fa-brands fa-twitter"></i></NavLink>
            <NavLink to='/'><i class="fa-brands fa-facebook"></i></NavLink>
            <NavLink to='/'><i class="fa-brands fa-pinterest"></i>  </NavLink>
            <NavLink to='/'><i class="fa-brands fa-instagram"></i></NavLink>
            <NavLink to='/'><i class="fa-brands fa-tiktok"></i></NavLink>
            </div>
            <div className="input">
                <input type="text" placeholder="Email Address"/>
                <button className="inputBtn">SUBSCRIBE</button>
            </div>
            <button className="inputBtn2">SUBSCRIBE</button>
            <div className="email mt-2">
            Please enter your email address.
            </div>
            <p>Get updates, coupons, and news from Partake!</p>
            <div className="copyright2 ms-2">Copyright © 2023 Partake Foods</div>
        </div>
      </div>
      <img className="rightImg" src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/cook-13.png?v=1640691667" alt="" />
    </footer>
  );
};

export default Footer;
