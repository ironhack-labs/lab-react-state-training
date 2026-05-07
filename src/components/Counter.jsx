import {useState} from "React"

export default function Counter(){
    const [num, setNum] = useState(0)
    
        return(
            <div>
                <button onClick = {()=>{if(num > 0){setNum(num - 1)}}}>-</button>
                {num}
                <button onClick = {()=> setNum(num+1)}>+</button>
            </div>
        )
}

