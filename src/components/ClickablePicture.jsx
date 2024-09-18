import imgSinLentes from '../assets/images/maxence.png'
import imgConLentes from '../assets/images/maxence-glasses.png'
import { useState } from 'react'


function ClickablePicture() {
  const [cambioImagen, setCambioImagen] = useState(imgSinLentes)

  const clickImagen = () => {
    setCambioImagen(primeraImage => primeraImage === imgSinLentes ? imgConLentes : imgSinLentes)
  }

  return (
    <div>
        <img onClick={clickImagen} src= {cambioImagen} alt="sinLentes" />
    </div>
  )
}

export default ClickablePicture