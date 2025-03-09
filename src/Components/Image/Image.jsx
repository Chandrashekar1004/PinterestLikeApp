import React from 'react'
import { IKImage } from 'imagekitio-react'
const Image = ({path,alt,className,w,h}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
    path={path} 
    transformation={[{
      width:w,
      height:h
    }]}
    className={className}
    loading='lazy'
    lqip={{active:true,quality:20}}
    alt=""
  />
  )
}

export default Image
