import { useState, useEffect } from "react"
import "./../App.css"

const DiscoButton = () => {

    const arrayColor = ["purple", "blue", "green", "yellow", "orange", "red"]

    const [discoButtonCounter, setDiscoButtonCounter] = useState(0)
    const [color, setColor] = useState(arrayColor[0])
    const [counter, setCounter] = useState(0)

    const changeDiscoButton = () => {
        setCounter((prevState) => prevState + 1)
        setDiscoButtonCounter((prevState) => prevState + 1)
    }

    useEffect(
        () => {
            counter > 5 && setCounter(0)
            setColor(() => arrayColor[counter])
        }, [counter]
    )


    return (
        <div>
            <button onClick={changeDiscoButton} className={color}>{discoButtonCounter} Likes</button>
        </div>
    )

}

export default DiscoButton