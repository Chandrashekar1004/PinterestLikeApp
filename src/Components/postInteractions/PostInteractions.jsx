import React from 'react'
import "./PostInteractions.css"
import Image from '../Image/Image'
const PostInteractions = () => {
  return (
    <div className='postInteraction'>
        <div className="interactionIcons">
            <Image path="General/react.svg"/>  
            273 
            <Image path="General/share.svg"/>
            <Image path="General/more.svg"/>
        </div>
        <button>Save</button>

    </div>
  )
}

export default PostInteractions;
