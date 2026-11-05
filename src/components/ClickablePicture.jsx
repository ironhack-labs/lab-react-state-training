import { useState } from "react"
import pic1 from '../assets/images/maxence.png'
import pic2 from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const[click,setClick]=useState()
  return (
    <>
    <div>ClickablePicture</div>

    <img src={click ? pic2 :pic1}  onClick={()=>setClick(!click)} />
    </>
  )
}
export default ClickablePicture