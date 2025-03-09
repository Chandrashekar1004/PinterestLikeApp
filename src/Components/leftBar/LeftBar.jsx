import React from 'react'
import "./LeftBar.css"
import Image from '../Image/Image'
import { Link } from 'react-router'
const LeftBar = () => {
  return (
    <div className='leftBar'>
        <div className='menuIcons'>
            <Link to='/' className='menuIcon'>
                <Image path="/General/flamingtext_com-173300257.png"  alt='' className='logo'/>
            </Link>
            <Link to='/'   className='menuIcon' >
                <Image path="/General/home.svg"  alt='' />
            </Link>
            <Link to='/create   ' className='menuIcon'>
                <Image path="/General/create.svg" alt='' />
            </Link>
            <Link to='/' className='menuIcon'>
                <Image path="/General/updates.svg" alt='' />
            </Link>
            <Link to='/' className='menuIcon'>
                <Image path="/General/messages.svg"  alt='' />
            </Link>
        </div>
        <Link to='/' className='menuIcon'>
                <Image path="/General/settings.svg"  alt='' />
            </Link>
      
    </div>
  )
}

export default LeftBar;
