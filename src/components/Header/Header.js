import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const drop = () =>{
        document.getElementById('prodDrop').style.display = 'block'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
    }
    // const leave = () =>{
    //     document.getElementById('prodDrop').style.display = 'none'
    //     document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
    //     document.querySelector('header').style.backgroundColor = '#FBC9B6'
    // }
    // const prodEnter = () => {
    //     document.getElementById('prodDrop').style.display = 'block'
    // }
    const prodLeave = () => {
        document.getElementById('prodDrop').style.display = 'none'
        document.querySelector('.logo').src = 'https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('header').style.backgroundColor = '#FBC9B6'
    }

  return (
    <header>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="left col-lg-4">
                   <NavLink onMouseEnter={drop} id='pr' className='tab' to={'/'}>Products</NavLink>
                   <NavLink className='tab' to={'/'}>Our Story</NavLink>
                   <NavLink className='tab' to={'/'}>Ingredients</NavLink>
                </div>
                <div className="center col-lg-4">
                    <NavLink to={'/'}><img className='logo' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x" alt="logo" /></NavLink>
                </div>
                <div className="right col-lg-3 align-items-center text-end">
                    <NavLink className='tab' to={'/'}>Find Us</NavLink>
                    <NavLink className='tab' to={'/'}>Blog</NavLink>
                    <i className="fa-solid fa-magnifying-glass ml-4"></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>

                {/* Drop Down */}
            <div onMouseLeave={prodLeave}  id='prodDrop' className="producsDropDown bg-white">
                    <div className='d-flex'>
                        <div className="left col-lg-2">
                            <NavLink to={'/'}>Best Sellers</NavLink>
                            <NavLink to={'/'}>Snack Packs</NavLink>
                            <NavLink to={'/'}>Gifts</NavLink>
                            <NavLink to={'/'}>Loyality Program</NavLink>
                            <NavLink to={'/'}>Build Your Own</NavLink>
                        </div>
                        <div className="right col-lg-10">
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-1.png?v=1640771968' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}>VARIETY PACKS</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-2.png?v=1640771968' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}>COOKIES</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_Main_Menu_771a0291-8df9-4274-a0d8-5d23b709c8e1.png?v=1642497529' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}>BAKING MIXES</NavLink>
                            </div>
                            <div className="box col-lg-3 text-center">
                                <NavLink to={'/'}><img className='img-fluid mb-2' src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_Main_Menu_ceee14d2-324b-4824-ab8e-07945334bfef.png?v=1642497596' alt='img'/></NavLink>
                                <NavLink className='boxLink' to={'/'}>BREAKFAST MIXES</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </header>
  )
}

export default Header