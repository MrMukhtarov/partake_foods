import React from "react";
import { NavLink } from "react-router-dom";
import "./BestSellers.css";

const BestSellers = () => {
    
  return (
    <div className="bestSellers">
      <h2 className="title">Shop Our Bestsellers</h2>
    {/* ---------------------- */}
    {/* ---------------Big-------------- */}
    {/* ---------------------- */}
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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
