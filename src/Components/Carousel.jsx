import { useState } from "react"


function Carousel(props) {

const [imagenVisible, cambioImagen] = useState(0)

const hundleImagenLeft = () =>{

    const newIndex = (imagenVisible - 1 + props.images.length) % props.images.length
    cambioImagen(newIndex)

}

const hundleImagenRight = () =>{

    const newIndex = (imagenVisible + 1) % props.images.length
    cambioImagen(newIndex)

}

  return (
    <div>
        
<button onClick={hundleImagenLeft}>Left</button>
<img src={props.images[imagenVisible]} alt="img" />
<button onClick={hundleImagenRight}>Right</button>

    </div>
  )
}

export default Carousel