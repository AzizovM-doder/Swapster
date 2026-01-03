import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Layout = () => {
  return (
    <div>
        <Nav />
        <div className="py-15"></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout