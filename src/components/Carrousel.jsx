import { useState} from "react";

function Carrousel (props){
    const [counter, setCounter] = useState(0) 
    return(
        <div>
            <button onClick={()=> counter>0 ? setCounter(counter-1): setCounter(0)}>left</button>
            <img src={props.images[counter]} alt="" />
            <button onClick={()=>counter<props.images.length-1 ? setCounter(counter+1): setCounter(props.images.length-1)}>right</button>
        </div>
    )
}

export default Carrousel