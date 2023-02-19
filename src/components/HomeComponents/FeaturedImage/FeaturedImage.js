import React from "react";
import { NavLink } from "react-bootstrap";
import "./FeaturedImage.css";

const FeaturedImage = () => {
  return (
    <div className="featuredImages">
      <div className="all d-flex justify-conetnt-center">
        <div className="left col-lg-6 ps-0 pe-0">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_750x643_171e6b49-0099-4151-b5e2-b0c8dc49246f_750x.jpg?v=1641972523"
            alt="img"
          />
        </div>
        <div className="right col-lg-6">
          <h2>Building a Bigger Table</h2>
          <p className="rightP">
            A portion of proceeds support families living with food insecurity.
          </p>
          <div className="first d-flex align-items-center gap-3 mb-3">
            <i class="fa-solid fa-hand-holding-heart"></i>
            <p>Generated with Avocode.</p>
          </div>
          <div className="first d-flex align-items-center gap-3 mb-3">
            <i class="fa-solid fa-utensils"></i>
            <p className="ms-2">Fighting Food Insecurity</p>
          </div>
          <div className="first d-flex align-items-center gap-3 mb-3">
            <i class="fa-solid fa-door-open"></i>
            <p>Creating Opportunities in CPG</p>
          </div>
          <div>
          <NavLink to='/'>READ MORE</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
