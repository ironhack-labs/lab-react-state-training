import { useState } from "react"

function Likebutton () {
    const [counter, setCounter] = useState(0);
    return (
        <>
        <button onClick={() => setCounter(counter + 1)}>{counter}Like</button>
        
        </>
    )
}
export default Likebutton