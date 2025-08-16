import { useState } from "react"
import max from "../assets/images/maxence.png"
import glasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [img,setImg]=useState(max)

    const handleImageClick= (event) => {
        if (img===max){
        setImg(glasses)}
        else{
            setImg(max)
        }


    }
  return (
    <>

    <img src={img} alt="max" onClick={handleImageClick}  style={{ width: "100px", height: "100px" }}/>
    
    </>
  )
}
export default ClickablePicture