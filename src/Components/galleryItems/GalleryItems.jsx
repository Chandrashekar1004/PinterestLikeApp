import React from 'react';
import './GalleryItems.css';
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router';
import Image from '../Image/Image';
const GalleryItems = ({ item }) => {

  const optimizedHeight=(300*item.height)/item.width
  return (
    <div className='galleryItem' style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
     <Image path={item.link} alt="alt" w={300} h={optimizedHeight}/>
      <Link to={`/pin/${item.id}`} className='overLay' />
      <button className='saveButton'>Save</button>
      <div className='overlayIcons'>
        <button>
          <Image path="/General/share.svg" alt="" />
        </button>
        <button>
          <Image path="/General/react.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItems;
