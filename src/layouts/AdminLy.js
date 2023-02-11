import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLy = () => {
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLy