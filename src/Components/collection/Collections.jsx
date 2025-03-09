import React from 'react'
import "./Collections.css"
import Image from '../Image/Image'


const Collections = () => {
  return (
    <div className='collections'>
        <div className="collection">
            <Image path="Images/cody-rhodes-casts-doubt-on-rock-facing-roman.webp"
            alt="" />
            <div className="collectionInfo">
                <h1>Cody&Roman</h1>
                <span>11 Pins.1w</span>
            </div>
        </div>
        <div className="collection">
            <Image path="Images/GettyImages-2192297857.jpg"
            alt="" />
            <div className="collectionInfo">
                <h1>Rock&Roman</h1>
                <span>11 Pins.1w</span>
            </div>
        </div>
        <div className="collection">
            <Image path="Images/wwe5-1600x900.jpg"
            alt="" />
            <div className="collectionInfo">
                <h1>Cody&John</h1>
                <span>11 Pins.1w</span>
            </div>
        </div>
      
    </div>
  )
}

export default Collections
