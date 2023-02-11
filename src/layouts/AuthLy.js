import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLy = () => {
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLy