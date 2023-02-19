import React from "react";
import { NavLink } from "react-router-dom";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <div className="all">
        <div className="top d-flex">
          <div className="iimBox col-lg-4 ps-0 pe-0">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screen_Shot_2023-01-29_at_8.15.31_PM.png?v=1675041355"
              alt="img"
            />
          </div>
          <div className="iimBox col-lg-4 ps-0 pe-0">
            <img
              className="img-fluid second"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screenshot_29.png?v=1668705904"
              alt="img"
            />
          </div>
          <div className="iimBox col-lg-4 ps-0 pe-0 third">
            <img
              className="img-fluid"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screen_Shot_2023-01-29_at_8.12.16_PM.png?v=1675041282"
              alt="img"
            />
          </div>
        </div>
        <div className="bottom col-lg-12 text-center col-12">
          <div className="svgDiv">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 494 123"
            >
              <path
                fill="currentColor"
                d="M331 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
              <path
                fill="currentColor"
                d="M406 123a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
              <path
                fill="currentColor"
                d="M63 41a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
              <path
                fill="currentColor"
                d="M486 57a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
              <path
                fill="currentColor"
                d="M8 100a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
            </svg>
          </div>
          <NavLink to="https://www.instagram.com/partakefoods/" target='_blank'>@PartakeFoods</NavLink>
          <div className="ins">FOLLOW US ON INSTAGRAM</div>
        </div>
      </div>
    </div>
  );
};

export default Social;
