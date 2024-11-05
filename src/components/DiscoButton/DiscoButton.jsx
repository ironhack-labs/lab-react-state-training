import { useState } from 'react'

import "./DiscoButton.css"

const DiscoButton = () => {

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const [count1, setCount1] = useState(0)
    let [selectedColor1, setSelectedColor1] = useState("purple")

    const [count2, setCount2] = useState(0)
    let [selectedColor2, setSelectedColor2] = useState("purple")


    const handleCounter1 = () => {
        setCount1(count1 + 1)
        setSelectedColor1(selectedColor1 = colors[Math.floor(Math.random() * colors.length)])
    }

    const handleCounter2 = () => {
        setCount2(count2 + 1)
        setSelectedColor2(selectedColor2 = colors[Math.floor(Math.random() * colors.length)])
    }


    return (
        <div className="LikeButton">
            <button onClick={handleCounter1} className={selectedColor1}>{count1} Likes</button>
            <button onClick={handleCounter2} className={selectedColor2}>{count2} Likes</button>
        </div>
    )
}

export default DiscoButton