import { useState } from "react"

function LikeButton(){

    const [count, setCount] = useState(0)
   
    return(
        <button className="LikeBtn" type="button" onClick={()=> {
            console.log(count)
            setCount(count + 1)
        }}
        >
        {count + ' Like'}
        </button>
    )
}
export default LikeButton