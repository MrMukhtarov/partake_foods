import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Ingredients.css";

const Ingredients = () => {
  const [gingers, setGiner] = useState("none");
  const [vanilla, setVanilla] = useState("none");
  const [oats, setOats] = useState("none");
  const [flax, setFlax] = useState("none");
  const [rosemary, setRosemary] = useState("none");
  const [cinnamon, setCinnamon] = useState("none");
  const [icon, setIcon] = useState("plus");
  const [icon2, setIcon2] = useState("plus");
  const [icon3, setIcon3] = useState("plus");
  const [icon4, setIcon4] = useState("plus");
  const [icon5, setIcon5] = useState("plus");
  const [icon6, setIcon6] = useState("plus");

  // GINGER
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setGiner("none");
      setIcon("plus");
    }
  };

  const ginerInfo = () => {
    if (gingers === "none") {
      setGiner("block");
      setIcon("x");
    } else {
      setGiner("none");
      setIcon("plus");
    }
  };
  // GINGER
  // --------
  // VANILLA
  const refTwo = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside2, true);
  }, []);

  const handleClickOutside2 = (e) => {
    if (!refTwo.current.contains(e.target)) {
      setVanilla("none");
      setIcon2("plus");
    }
  };

  const vanillaInfo = () => {
    if (vanilla === "none") {
      setVanilla("block");
      setIcon2("x");
    } else {
      setVanilla("none");
      setIcon2("plus");
    }
  };
  // VANILLA
  // -------
  // OATS
  const refThree = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside3, true);
  }, []);

  const handleClickOutside3 = (e) => {
    if (!refThree.current.contains(e.target)) {
      setOats("none");
      setIcon3("plus");
    }
  };

  const OatsInfo = () => {
    if (oats === "none") {
      setOats("block");
      setIcon3("x");
    } else {
      setOats("none");
      setIcon3("plus");
    }
  };
  // OATS
  // -------
  //FLAX
  const refFour = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside4, true);
  }, []);

  const handleClickOutside4 = (e) => {
    if (!refFour.current.contains(e.target)) {
      setFlax("none");
      setIcon4("plus");
    }
  };

  const FlaxInfo = () => {
    if (flax === "none") {
      setFlax("block");
      setIcon4("x");
    } else {
      setFlax("none");
      setIcon4("plus");
    }
  };
  //FLAX
  // -------
  //ROSEMARY
  const refFive = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside5, true);
  }, []);

  const handleClickOutside5 = (e) => {
    if (!refFive.current.contains(e.target)) {
      setRosemary("none");
      setIcon5("plus");
    }
  };

  const RosemaryInfo = () => {
    if (rosemary === "none") {
      setRosemary("block");
      setIcon5("x");
    } else {
      setRosemary("none");
      setIcon5("plus");
    }
  };
  //ROSEMARY
  // -------
  //CINNAMON
  const refSix = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside6, true);
  }, []);

  const handleClickOutside6 = (e) => {
    if (!refSix.current.contains(e.target)) {
      setCinnamon("none");
      setIcon6("plus");
    }
  };

  const CinnamonInfo = () => {
    if (cinnamon === "none") {
      setCinnamon("block");
      setIcon6("x");
    } else {
      setCinnamon("none");
      setIcon6("plus");
    }
  };
  //CINNAMON
  return (
    <div className="ingredients">
      <div className="all row justify-content-between col-12">
        <div className="left col-lg-5">
          <h2>Because ingredients matter.</h2>
          <p>
            All of our products are baked with better-for-you, allergy-friendly
            ingredients like buckwheat, cassava, oats, and cinnamon so those
            with allergies and without can enjoy and share with confidence.
          </p>
          <NavLink to="/">LEARN MORE ABOUT OUR INGREDIENTS</NavLink>
        </div>
        <div className="right col-lg-6 col-12">
          <div
            ref={refOne}
            id="ginerB"
            onClick={ginerInfo}
            className={`box gingerBox col-lg-3 col-3`}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-ginger_f08ff2d2-b048-47de-85cc-f427b88c2984.png?v=1640590204"
              alt="img"
            />
            <i id="righti" className={`fa-solid fa-plus plus ${icon}`}></i>
            <div id="gingerDiv" className={`ginger ${gingers}`}>
              <h5>Ginger</h5>
              <p>
                A commonly used herbal medicine, ginger’s bioactive compound
                gingerol is known for its anti-inflammatory and antioxidant
                effects.
              </p>
            </div>
          </div>
          <div
            className="box col-lg-3 vanillaBox col-3"
            ref={refTwo}
            onClick={vanillaInfo}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-vanilla_21d36f6a-863f-42cd-96b7-0a0b2c0c9125_750x.png?v=1642486572"
              alt="img"
            />
            <i id="righti2" className={`fa-solid fa-plus plus ${icon2}`}></i>
            <div id="vanillaDiv" className={`vanilla ${vanilla}`}>
              <h5>Vanilla</h5>
              <p>
                The vanilla bean is known for its fragrance and flavor, but it
                is also used to make medicine.
              </p>
            </div>
          </div>
          <div
            className="box oatsBox col-lg-3 col-3"
            onClick={OatsInfo}
            ref={refThree}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-oats_240x_bf7129c1-26c5-4357-9778-53db870d9308.png?v=1640667412"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon3}`}></i>
            <div id="oatsDiv" className={`oats ${oats}`}>
              <h5>Quick Rolled Oats</h5>
              <p>Sustainably grown and harvested from non-GMO seed.</p>
            </div>
          </div>
          <div
            className="box col-lg-3 flaxBox col-3"
            onClick={FlaxInfo}
            ref={refFour}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Flax_240x_aff2738b-af33-4ee1-99de-f47adb1bc9b8.png?v=1640667941"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon4}`}></i>
            <div id="flaxDiv" className={`flaxs ${flax}`}>
              <h5>Flax</h5>
              <p>
                These mighty seeds are packed with numerous nutrients, omega-3
                fatty acids and fiber.
              </p>
            </div>
          </div>
          <div
            className="box col-lg-3 rosemaryBox col-3"
            onClick={RosemaryInfo}
            ref={refFive}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/rosemary_c8ac195c-64d6-4964-987d-abf6337bd71c_750x.png?v=1642487662"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon5}`}></i>
            <div id="rosemaryDiv" className={`rosemary ${rosemary}`}>
              <h5>Rosemary</h5>
              <p>
                With a very distinct flavor, rosemary is full of antioxidants
                and anti-inflammatory compounds.
              </p>
            </div>
          </div>
          <div
            className="box col-lg-3 cinnamonBox col-3"
            onClick={CinnamonInfo}
            ref={refSix}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-cinammon_240x_4e7dcc87-d964-487d-8697-69dafed1e5ca.png?v=1640667337"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon6}`}></i>
            <div id="cinnamonDiv" className={`cinnamon ${cinnamon}`}>
              <h5>Cinnamon</h5>
              <p>
                Traced back to Ancient Egypt, Cinnamon has been used for
                thousands of years as medicine and is now the 2nd most commonly
                used spice in the U.S.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
