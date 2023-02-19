import React from 'react'
import { NavLink } from 'react-bootstrap'
import './NeighBoorHood.css'

const NeighBoorHood = () => {
  return (
    <div className='neighBoorHood'>
        <div className="all">
            <h3>Partake in your neighborhood.</h3>
            <NavLink to='/'>FIND A STORE</NavLink>
        </div>
    </div>
  )
}

export default NeighBoorHood