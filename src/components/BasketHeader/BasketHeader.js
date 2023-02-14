import React from "react";
import "./BasketHeader.css";

const BasketHeader = () => {
    const basketClose = () => {
        document.querySelector('.basketHeader').style.display = 'none'
        document.body.classList.remove("stop-scrolling");
    }
    const hidePopup = () => {
        document.querySelector('.basketHeader').style.display = 'none'
        document.body.classList.remove("stop-scrolling");
    }
  return (
    <div className="basketHeader">
        <div className="blocker" onClick={hidePopup}></div>
      <div className="all">
        <div className="top d-flex align-items-center">
          <div className="left col-lg-10 align-items-center col-10">
            <h3>Your Cart</h3>
            <span className="mb-1">(0)</span>
          </div>
          <div className="right col-lg-2">
            <i onClick={basketClose} className="fa-solid fa-xmark" title="close"></i>
          </div>
        </div>
        <div className="bottom">
          <p>Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};
// header basket icons page!!!
export default BasketHeader;
