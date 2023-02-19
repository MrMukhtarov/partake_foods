import React from "react";
import { NavLink } from "react-router-dom";
import "./BestSellers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BestSellers = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="bestSellers">
      <h2 className="title">Shop Our Bestsellers</h2>
      {/* ---------------------- */}
      {/* ---------------Big-------------- */}
      <div className="crs">
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div class="item">
            <div className="box col-lg-4 col-12">
              <div className="absolute">
                <span>BEST</span>
                <span>SELLER</span>
              </div>
              <NavLink className="boxLink" to="/">
                <div className="top">
                  <img
                    className="img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1100x.png?v=1646839332"
                    alt=""
                  />
                  <div className="quick-add">
                    <NavLink to="/">QUICK ADD</NavLink>
                  </div>
                </div>
                <div className="bottom">
                  <NavLink to="/">Crunchy Chocolate Chip Cookies</NavLink>
                  <div className="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>4.4</span>
                  </div>
                  <div className="price">
                    <span>From $16.99</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div class="item">
            <div className="box col-lg-4">
              <div className="absolute">
                <span>BEST</span>
                <span>SELLER</span>
              </div>
              <NavLink className="boxLink" to="/">
                <div className="top">
                  <img
                    className="img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/All_variety_bigcanvas_3000x3000_7de3a80a-4c5f-4a50-a62d-52fce2f06543_750x.png?v=1648499779"
                    alt=""
                  />
                  <div className="quick-add">
                    <NavLink to="/">QUICK ADD</NavLink>
                  </div>
                </div>
                <div className="bottom">
                  <NavLink to="/">
                    All the Cookies! Family Pack (8 Boxes)
                  </NavLink>
                  <div className="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>4.8</span>
                  </div>
                  <div className="price">
                    <span>$43.99</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div class="item">
            <div className="box col-lg-4">
              <div className="absolute">
                <span>BEST</span>
                <span>SELLER</span>
              </div>
              <NavLink className="boxLink" to="/">
                <div className="top">
                  <img
                    className="img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyVariety_stacked_1_750x.png?v=1648219431"
                    alt=""
                  />
                  <div className="quick-add">
                    <NavLink to="/">QUICK ADD</NavLink>
                  </div>
                </div>
                <div className="bottom">
                  <NavLink to="/">Crunchy Variety Pack</NavLink>
                  <div className="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <span>4.8</span>
                  </div>
                  <div className="price">
                    <span>From $22.49</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* ---------------------- */}
      {/* ---------------Big-------------- */}

      <div className="all row">
        <div className="box col-lg-4 col-12">
          <div className="absolute">
            <span>BEST</span>
            <span>SELLER</span>
          </div>
          <NavLink className="boxLink" to="/">
            <div className="top">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1100x.png?v=1646839332"
                alt=""
              />
              <div className="quick-add">
                <NavLink to="/">QUICK ADD</NavLink>
              </div>
            </div>
            <div className="bottom">
              <NavLink to="/">Crunchy Chocolate Chip Cookies</NavLink>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.4</span>
              </div>
              <div className="price">
                <span>From $16.99</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="box col-lg-4">
          <div className="absolute">
            <span>BEST</span>
            <span>SELLER</span>
          </div>
          <NavLink className="boxLink" to="/">
            <div className="top">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/All_variety_bigcanvas_3000x3000_7de3a80a-4c5f-4a50-a62d-52fce2f06543_750x.png?v=1648499779"
                alt=""
              />
              <div className="quick-add">
                <NavLink to="/">QUICK ADD</NavLink>
              </div>
            </div>
            <div className="bottom">
              <NavLink to="/">All the Cookies! Family Pack (8 Boxes)</NavLink>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.8</span>
              </div>
              <div className="price">
                <span>$43.99</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="box col-lg-4">
          <div className="absolute">
            <span>BEST</span>
            <span>SELLER</span>
          </div>
          <NavLink className="boxLink" to="/">
            <div className="top">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyVariety_stacked_1_750x.png?v=1648219431"
                alt=""
              />
              <div className="quick-add">
                <NavLink to="/">QUICK ADD</NavLink>
              </div>
            </div>
            <div className="bottom">
              <NavLink to="/">Crunchy Variety Pack</NavLink>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <span>4.8</span>
              </div>
              <div className="price">
                <span>From $22.49</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
