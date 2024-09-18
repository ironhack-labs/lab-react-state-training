import { useState } from 'react';
import photo from '../assets/images/maxence.png';
import glasses from '../assets/images/glasses.png';
import '../App.css';

export default function ClickablePicture() {
  const [glassesState, setGlasses] = useState(false);
  function onClick () {
    setGlasses(!glassesState)
  }
  return (
    <figure className={'photoContainer'} onClick={onClick}>
      <img className={'maxPhoto'} src={photo} alt="" />
      <img className={glassesState ? 'maxGlasses' : 'maxGlassesNone'}src={glasses} alt="" />
    </figure>
  )
}
