import { useState } from "react"

function Carousel(props) {

  let [indexFoto, setIndexFoto] = useState(Math.floor(Math.random() * props.images.length))

  const imagesArr = props.images

  const handleMoveFotoRight = () => {
    setIndexFoto(indexFoto +1)
  }

  const handleMoveFotoLeft = () => {
    setIndexFoto(indexFoto -1)
  }

  return (
    <div>
      <button disabled={indexFoto <= 0 ? true : false} onClick={handleMoveFotoLeft}>Left</button>
      <img src={imagesArr[indexFoto]} alt="foto" />
      <button disabled={indexFoto >= (imagesArr.length - 1) ? true : false} onClick={handleMoveFotoRight}>Rigth</button>
    </div>
  )
}

export default Carousel