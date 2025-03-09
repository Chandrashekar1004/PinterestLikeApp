import React from 'react';
import "./Gallery.css";
import GalleryItems from '../galleryItems/GalleryItems';

const Gallery = () => {
  // Temp
  const items = [
    {id: 1, link: 'Images/wrestlemania-18-the-rock-hulk-hogan.jpg', width: 2416, height: 1302},
    {id: 2, link: 'Images/mixcollage-11-jan-2024-07-01-pm-6877.jpg', width: 3000, height: 1500},
    {id: 3, link: 'Images/1109-Top-WWE-Superstars-Brock-Lesnar.jpg', width: 1109, height: 614},
    {id: 4, link: 'Images/wwe_greatest-wwe-superstars.jpg', width: 3000, height: 1500},
    {id: 5, link: 'Images/images (2).jpeg', width: 206, height: 245},
    {id: 6, link: 'Images/John-Cena-WWE1.webp', width: 1200, height: 675},
    {id: 7, link: 'Images/MV5BYzc5YmM5ZmMtNWVjOC00YjE4LTgyOWQtZmQ5NWM1ODcyYjA0XkEyXkFqcGc@._V1_.jpg', width: 2400, height: 3600},
    {id: 8, link: 'Images/download.jpeg', width: 302, height: 167},
    {id: 9, link: 'Images/download (1).jpeg', width: 299, height: 168},
    {id: 10, link: 'Images/Best-WWE-men-021f317.jpg', width: 1987, height: 1324},
    {id: 11, link: 'Images/Rock-and-Roman-Reigns-scaled.jpg', width: 2560, height: 1707},
    {id: 12, link: 'Images/images.jpeg', width: 225, height: 225},
    {id: 13, link: 'Images/wwe5-1600x900.jpg', width: 1600, height: 900},
    {id: 14, link: 'Images/images (1).jpeg', width: 225, height: 225},
    {id: 15, link: 'Images/GettyImages-2192297857.jpg', width: 1440, height: 960},
    {id: 16, link: 'Images/daniel-bryan-at-wrestlemania-30-1711031764449.jpg', width: 1280, height: 720},
    {id: 17, link: 'Images/cody-rhodes-casts-doubt-on-rock-facing-roman.webp', width: 1600, height: 900}
  ];

  return (
    <div className='gallery'>
      {items.map((item) => (
        <GalleryItems key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
