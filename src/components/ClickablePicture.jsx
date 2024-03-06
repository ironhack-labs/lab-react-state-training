import React from 'react'
import Image1 from '../assets/images/maxence.png';
import Image2 from '../assets/images/maxence-glasses.png';

export const ClickablePicture = ({checkImg, changeImgFunc}) => {
  return (
    <div>
        <img src={checkImg ? Image1 : Image2} onClick={changeImgFunc} alt="" />
      
    </div>
  )
}
