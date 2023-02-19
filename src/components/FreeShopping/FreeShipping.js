import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FreeShipping.module.css";

const FreeShipping = () => {
  return (
    <div className={`${styles.free}`}>
      <div className={`${styles.container}`}>
        <NavLink to={"/"} className={`${styles.nav} text-decoration-none`}>
          <div className={`${styles.all} d-flex justify-content-center`}>
            <p className={`${styles.p}`}>Free Shipping on Orders $29.99+</p>
            <i className={`${styles.icon} fa-solid fa-arrow-right`}></i>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default FreeShipping;
