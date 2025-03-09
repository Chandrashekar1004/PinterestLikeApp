import React,{useState} from 'react'
import "./ProfilePage.css"
import Image from "../../Components/Image/Image";
import Gallery from '../../Components/gallery/Gallery.jsx';
import Collections from '../../Components/collection/Collections';

const ProfilePage = () => {
  const [type,setType]=useState("created")
  return (
    <div className="profilePage"> 
    <Image className="profileImg" path="General/noAvatar.png" alt="" />
    <h1 className='profileName'>Chandrashekar Iyer</h1>
    <span className='userName'>@Csiyer</span>
    <div className="profileInfo">10 followers . 20 following</div>
    <div className='profileInteraction'>
      <Image path="General/share.svg" alt=""/>
      <div className='profileButton'>
      <button className='Message'>Message</button>
      <button className='Follow'>Follow</button>
      </div>
      <Image path="General/more.svg" alt=""/>
    </div>  

    <div className="profileOptions">
      <span onClick={()=>setType("created")} className={type==="created" ? "active" : ""}>Created</span>
      <span onClick={()=>setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
    </div>

      <div>
        {type==="created"? <Gallery /> : <Collections />}
      </div>


    </div>
  )
}

export default ProfilePage;
