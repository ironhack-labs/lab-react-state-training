import { useState } from "react";

function Dice (){
    const [diceFace, setDiceFace] = useState ("/src/assets/images/dice-empty.png"); 
    
    const handleClick = () => {
        setDiceFace("/src/assets/images/dice-empty.png");

       
        setTimeout (() => {
            const value = Math.floor((Math.random() * 6) + 1);
            switch (value) {
                case 1: 
                    setDiceFace("/src/assets/images/dice1.png" );
                    break;
                case 2: 
                    setDiceFace( "/src/assets/images/dice2.png");
                    break;
            
                case 3: 
                    setDiceFace("/src/assets/images/dice3.png");
                    break;
                
                case 4: 
                    setDiceFace( "/src/assets/images/dice4.png");
                    break;
                
                case 5: 
                    setDiceFace( "/src/assets/images/dice5.png");
                    break;
                
                case 6: 
                    setDiceFace( "/src/assets/images/dice6.png");
                    break;
            }
        }, 1000);
    };
    
    return (
        <div className = "d-flex flex-wrap gap-2 my-2" onClick = {handleClick} >
        <img src = {diceFace} alt = "Dice" style={{ width: "100px", height: "100px" }} />
        </div>
    );
}

export default Dice; 