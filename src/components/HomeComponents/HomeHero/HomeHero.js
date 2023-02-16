import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeHero.css'

const HomeHero = () => {
  return (
    <div className='homeHero'>
        <div className="container">
            <div className="all row justify-content-between">
                <div className="left col-lg-5 col-12">
                    <h1>Cinnamon Lovers, Rejoice</h1>
                    <p>Our new Soft Baked Snickerdoodle cookies are chewy on the outside with a perfectly-balanced cinnamon sugar flavor on the inside.</p>
                    <NavLink to='/'>SHOP NOW</NavLink>
                </div>
                <div className="right col-lg-6 col-12">
                    <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/L2A8583-Edit_A.png?v=1675362349" alt="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero