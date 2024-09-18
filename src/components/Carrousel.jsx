import { useState } from "react"

let index = 0
function Carrousel(props) {
    // console.log(props.vista[0])
    const [vista, setVista] = useState(props.vista[index])

    const handleCircus = (event)=>{
        if (event.target.id === "sum"){
            index++
            setVista(props.vista[index % props.vista.length])
        }
        else{
            index--;
            if (index < 0){
                index = props.vista.length - 1;
            }
            setVista(props.vista[index%props.vista.length])
        }
    }
    return (
        <div>
            <button onClick={handleCircus}>&lt;</button>
            <img src={vista} alt="" />
            <button id="sum" onClick={handleCircus}>&gt;</button>
        </div>
    )
}

export default Carrousel