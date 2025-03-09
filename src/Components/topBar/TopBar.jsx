import React from 'react'
import UserButton from '../userButton/UserButton'
import "./TopBar.css"
import Image from '../Image/Image'
const TopBar = () => {
  return (
    <div className='topBar'>
      {/* SEARCH */}
      <div className='search'>
        <Image path="/General/search.svg" alt=''  />
        <input type='text' placeholder='Search'/>
      </div>
      {/* USER */}
      <UserButton />
    </div>
  )
}

export default TopBar;
