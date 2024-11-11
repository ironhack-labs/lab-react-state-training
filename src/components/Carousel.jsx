import { useState } from "react"

const Carousel = ({images}) => {
    const [displayPic, setDisplayPic] = useState(images[0]);
    function changeRight() {
        console.log(images.indexOf(displayPic))
        if(images.indexOf(displayPic) === images.lenth) {
            setDisplayPic(images[3]);
        }else setDisplayPic(images[images.indexOf(displayPic) + 1])
    }

    function changeLeft() {
        console.log(images.indexOf(displayPic))
        if(images.indexOf(displayPic) <= 0) {
            setDisplayPic(images[0]);
        }else setDisplayPic(images[images.indexOf(displayPic) - 1])
    }
  return (
    <div>
        <button onClick={changeLeft}>Left</button>
        <img src={displayPic} alt="" />
        <button onClick={changeRight}>Right</button>
    </div>
  )
}

export default Carousel