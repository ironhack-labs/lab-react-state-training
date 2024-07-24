import { useState } from "react"

const LikeButton = () => {

    const [counter, setCounter] = useState(0)

    const countBotton = () => {
        setCounter(counter + 1)
    }



    return (
        <div>
            <p> aqui esta el LikeButton</p>
            <button onClick={countBotton}>{counter} Likes</button>

        </div>
    )
}

export default LikeButton