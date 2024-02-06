import { useState } from "react"

const LikeButton = () => {

    const [counterL, setCounterL] = useState(0)
    const [counterR, setCounterR] = useState(0)

    const handleCounterUpL = () => {
        setCounterL(counterL + 1)
    }

    const handleCounterUpR = () => {
        setCounterR(counterR + 1)
    }


    return (

        <div className="Counter">

            <h1>Like Button</h1>
            <button onClick={handleCounterUpL}> {counterL} Likes </button>
            <button onClick={handleCounterUpR}> {counterR} Likes </button>
        </div >


    )


}
export default LikeButton