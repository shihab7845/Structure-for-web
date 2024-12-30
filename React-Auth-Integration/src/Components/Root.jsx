import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function Root() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  )
}
