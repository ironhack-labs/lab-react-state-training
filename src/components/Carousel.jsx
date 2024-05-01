import {useState} from "react"

function Carousel({images}) {

    const [numFoto, setNumFoto] = useState (0)
    const totalImages = images.length

    function handleLeftBtn(){
        if (numFoto > 0)
        setNumFoto (numFoto -1)
    }
    function handleRightBtn(){
        if (numFoto < totalImages -1)
        setNumFoto (numFoto +1)
    }

  return (
    <div>
        <button onClick={handleLeftBtn}>Left</button>
        <img src={images[numFoto]} alt="Carrusel" />
        <button onClick={handleRightBtn}>Right</button>
    </div>
  )
}

export default Carousel