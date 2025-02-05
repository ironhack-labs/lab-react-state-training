import { useState } from "react";

export default function Dice(){
    const [img, setImg] = useState("./src/assets/images/dice-empty.png")
    
    const clicked = () =>{
        const rand = Math.floor(Math.random()*6)+1;
        setImg(`./src/assets/images/dice${rand}.png`);
    }
    return(
        <>
            <button onClick={clicked}>
                <img src={img} alt="dice" />
            </button>
            
        </>
    )
}