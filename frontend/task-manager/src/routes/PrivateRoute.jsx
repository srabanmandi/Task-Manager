import React from 'react'
import { Outlet } from 'react-router'

function PrivateRoute({allowedRoles}) {
  return <Outlet/>
}

export default PrivateRoute 