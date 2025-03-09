import React from 'react'
import "./LeftBar.css"
import Image from '../Image/Image'
const LeftBar = () => {
  return (
    <div className='leftBar'>
        <div className='menuIcons'>
            <a href='/'>
                <Image path="/General/flamingtext_com-173300257.png"  alt='' className='logo'/>
            </a>
            <a href='/'   className='menuIcon' >
                <Image path="/General/home.svg"  alt='' />
            </a>
            <a href='/' className='menuIcon'>
                <Image path="/General/create.svg" alt='' />
            </a>
            <a href='/' className='menuIcon'>
                <Image path="/General/updates.svg" alt='' />
            </a>
            <a href='/' className='menuIcon'>
                <Image path="/General/messages.svg"  alt='' />
            </a>
        </div>
        <a href='/' className='menuIcon'>
                <Image path="/General/settings.svg"  alt='' />
            </a>
      
    </div>
  )
}

export default LeftBar;
