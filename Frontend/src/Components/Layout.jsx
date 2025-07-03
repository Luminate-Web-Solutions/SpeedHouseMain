import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Home from '../pages/Home'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <Home/>
    <Footer />

    </>
  )
}

export default Layout