import React from 'react'
import "./MainLayout.css"
import { useState } from "react"
import { Outlet } from 'react-router'
// import LeftBar from './Components/leftBar/LeftBar.jsx'
import LeftBar from '../../Components/leftBar/LeftBar.jsx'
import TopBar from '../../Components/topBar/TopBar.jsx'
// import Gallery from './Components/gallery/Gallery.jsx'
const MainLayout = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Outlet />
        {/* <Gallery /> */}
        </div>
    </div>
  )
}


export default MainLayout
