import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {

    const tabli1 = () => {
       let one =  document.querySelector('.tabli1')
       let down1 = document.getElementById('down1')
       if(one.style.display === 'none'){
        one.style.display = 'block'
        down1.className = "fa-solid fa-caret-up down"
        document.getElementById('bottoms').style.top='0'
       }else{
        one.style.display = 'none'
        down1.className = 'fa-solid fa-caret-down down'
        document.getElementById('bottoms').style.bottom='300px'
       }
    }

    const tabli2 = () => {
        let one =  document.querySelector('.tabli2')
       let down2 = document.getElementById('down2')
        if(one.style.display === 'none'){
         one.style.display = 'block'
        down2.className = "fa-solid fa-caret-up down"
        }else{
         one.style.display = 'none'
        down2.className = 'fa-solid fa-caret-down down'
        }
     }

     const tabli3 = () => {
        let one =  document.querySelector('.tabli3')
       let down3 = document.getElementById('down3')
        if(one.style.display === 'none'){
         one.style.display = 'block'
        down3.className = "fa-solid fa-caret-up down blogi"
        }else{
         one.style.display = 'none'
        down3.className = 'fa-solid fa-caret-down down blogi'
        }
     }

     const close = () => {
        document.getElementById('burgers').style.display = 'none'
        document.body.classList.remove("stop-scrolling");
     }

  return (
    <div className="burgerMenu" id="burgers">
      <div className="burgerContainer">
        <i onClick={close} className="fa-solid fa-xmark mb-4 exit" title="close"></i>
        <div className="all">
            <div className="top d-flex">
                <ul>
                <li className="tabName" onClick={tabli1}>PRODUCTS <i id="down1" className="fa-solid fa-caret-down down"></i></li>
                        <ul className="tabli1" style={{display:"none"}} >
                            <li className="mt-3"><NavLink to='/'>Best Sellers</NavLink></li>
                            <li><NavLink to='/'>Snack Packs</NavLink></li>
                            <li><NavLink to='/'>Gifts</NavLink></li>
                            <li><NavLink to='/'>Loyality Program</NavLink></li>
                            <li><NavLink to='/'>Build Your Own</NavLink></li>
                            <li><NavLink to='/'>Variety Packs</NavLink></li>
                            <li><NavLink to='/'>Cookies</NavLink></li>
                            <li><NavLink to='/'>Baking Mixes</NavLink></li>
                            <li><NavLink to='/'>Breakfast Mixes</NavLink></li>
                        </ul>
                    
                    <hr className="hr"/>
                    <li onClick={tabli2} className="tabName">OUR STORY <i id="down2" className="fa-solid fa-caret-down down"></i></li>
                        <ul className="tabli2" style={{display:"none"}}>
                            <li className="mt-3"><NavLink to='/'>About Us</NavLink></li>
                            <li><NavLink to='/'>FAQ</NavLink></li>
                            <li><NavLink to='/'>Ingredients</NavLink></li>
                            <li><NavLink to='/'>Press</NavLink></li>
                        </ul>
                    <hr className="hr"/>
                    <li><NavLink className="tabName" to='/'>INGREDIENTS</NavLink>
                    </li>
                    <hr className="hr"/>
                    <li><NavLink className="tabName" to='/'>FIND US</NavLink>
                    </li>
                    <hr className="hr"/>
                    <li onClick={tabli3} className="tabName">BLOG <i id="down3" className="fa-solid fa-caret-down down blogi"></i></li>
                        <ul className="tabli3" style={{display:"none"}}>
                            <li className="mt-3"><NavLink to='/'>From the Blog</NavLink></li>
                            <li><NavLink to='/'>From Denise</NavLink></li>
                            <li><NavLink to='/'>Partake Recipes</NavLink></li>
                            <li><NavLink to='/'>Press</NavLink></li>
                        </ul>
                    <hr className="hr"/>
                    <ul className="bottom bottoms">
                        <NavLink to='/'><li><i className="fa-brands fa-facebook"></i></li></NavLink>
                        <NavLink to='/'><li><i className="fa-brands fa-instagram"></i></li></NavLink>
                        <NavLink to='/'><li><i className="fa-brands fa-twitter"></i></li></NavLink>
                        <NavLink to='/'><li><i className="fa-brands fa-pinterest"></i></li></NavLink>
                        <NavLink to='/'><li><i className="fa-brands fa-tiktok"></i></li></NavLink>
                    </ul>
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
