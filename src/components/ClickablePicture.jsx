import {useState} from "react"
import foto1 from "../assets/images/maxence.png"
import foto2 from "../assets/images/maxence-glasses.png"

function ClickablePicture(){


    const [ foto, setfoto ] = useState(foto1)
    const changeFoto = () => {
        if (foto === foto1){
            setfoto(foto2)
        }else{
            setfoto(foto1)
        }
         
    }

 {
  return (
    <div>
    
        <button onClick={changeFoto}><img src={foto} alt="aasd" style={{ width: "300px" }} /></button>
        </div>
  )
}}

export default ClickablePicture