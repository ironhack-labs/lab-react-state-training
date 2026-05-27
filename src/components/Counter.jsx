import {useState} from "react"


export function Counter(){

    const [increment, setIncrement] = useState(0)

    function countIncrement(){
        setIncrement(increment+1);
    }
     function countDecrement(){
        setIncrement(increment-1);
    }
    


    return (
        <>
        <button onClick={countDecrement} > -</button>
        {increment}

        <button onClick={countIncrement}> + </button>
        </>
    )

}