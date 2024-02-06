import { useState } from "react";

function DiscoButton () {
    
    const [discoCounter, setDiscoCounter] = useState(0)
    const [discoCounter1, setDiscoCounter1] = useState(0)
    const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"]
    const random = Math.floor((Math.random() * 5))
    const randomColor = colorsArray[random];

    const [color, setColor] = useState(colorsArray[0]);
    const [color1, setcolor1] = useState(colorsArray[0])

    function changeColor() {
        setDiscoCounter(discoCounter + 1)
        setColor(randomColor)
    }

    function changeColor1() {
        setDiscoCounter1(discoCounter1 + 1)
        setcolor1(randomColor)
    }

            return (

        <div className="disco-div">
            <button onClick={changeColor} style={{backgroundColor: color}} className="disco-buttons">{discoCounter} Likes</button>
            <button onClick={changeColor1} style={{backgroundColor: color1}} className="disco-buttons">{discoCounter1} Likes</button>

        </div>

            )
        }

               
        
export default DiscoButton;