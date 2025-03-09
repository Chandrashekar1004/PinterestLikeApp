import React, { useState } from 'react';
import "./UserButton.css";
import Image from '../Image/Image';

const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return currentUser ? (
    <div className={`userButton ${open ? 'open' : ''}`}>
      {/* Ensure the path is valid and not an empty string */}
      <Image path="/General/noAvatar.png" alt="User Avatar" />
      
      {/* Pass path for the arrow icon */}
      <Image 
        path="/General/arrow.svg"
        onClick={toggleMenu}
        alt="Toggle Arrow"
        className='arrow'
      />

      {open && (
        <div className='userOptions'>
          <div className='userOption'>Profile</div>
          <div className='userOption'>Setting</div>
          <div className='userOption'>Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className='loginLink'>Login/Sign up</a>
  );
};

export default UserButton;
