import React, { useState } from 'react'
import image1 from '../assets/maxence.png'
import image2 from '../assets/maxence-glasses.png'


export default function ClickablePicture() {

    const [imagenActual, setImagenActual] = useState(image1)
    
    const handleImagen = () =>{

        setImagenActual(imagenActual === imagen1 ? imagen2 : imagen1)
    }

  return (
    <div>
    <img 
        src={imagenActual} 
        alt="Clickable character" 
        onClick={handleImagen} 
        style={{ cursor: 'pointer' }} 
    />
</div>
  )
}
