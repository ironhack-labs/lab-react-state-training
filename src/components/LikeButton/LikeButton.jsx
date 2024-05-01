import { useState } from "react"

const Likebutton = () => {

    const [counter1, setCounter1] = useState(0)

    const incrementCounter1 = () => {
        setCounter1(counter1 + 1)
    }

    const [counter2, setCounter2] = useState(0)

    const incrementCounter2 = () => {
        setCounter2(counter2 + 1)
    }


    return (
        <div className="Likebutton">

            <button onClick={incrementCounter1}> {counter1} LIKES </button>
            <button onClick={incrementCounter2}> {counter2} LIKES </button>

        </div>
    )
}

export default Likebutton