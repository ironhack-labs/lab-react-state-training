import { useState } from "react"
import './ClickablePicture.css'
import day from './../../assets/canion-day.jpg/'
import night from './../../assets/canion-night.jpg/'


const ClickablePicture = ()=>{
    const[state, setState]= useState(true);
    const changeState = ()=>{
        setState(!state)
    }

    return(
        <div className="containerImg">
            <img src={state ? day : night} alt="img" onClick={changeState} />
        </div>
    )
}
export default ClickablePicture