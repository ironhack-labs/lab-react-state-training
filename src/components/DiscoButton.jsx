import { useState } from "react";
function discoButton(){
    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [counter, setCounter] = useState(0);
    const [bgColor, setBgColor] = useState(colorArray[randomNumber()]);

    function randomNumber(){
        //return random number between 1 and 6
        return Math.floor(Math.random() * colorArray.length);
    }

    function setStuff(){
        setCounter(counter+1); 
        setBgColor(colorArray[randomNumber()]);
    }

    return(<button style={{backgroundColor: bgColor}} onClick={()=> setStuff()} >{counter} Likes</button>)
}
export default discoButton