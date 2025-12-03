import { useState } from "react"


function LikeButton(){

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const increaseCounter1 = ()=>{   
        setCounter1(counter1 + 1)
    }
    const increaseCounter2 = () => {
            setCounter2(counter2 + 1)
        
    } 

    return (
    <div className="Likebutton">
        <button className="Likebutton" onClick={increaseCounter1}> {counter1} Likes</button>
        
        <button className="Likebutton" onClick={increaseCounter2}> {counter2} Likes</button>
    </div>
    )
}
export default LikeButton