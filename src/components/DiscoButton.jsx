import { useState } from "react"

export default function DiscoButton() {
    const [like, setLike] = useState(0)
    const [bgColor, setBgColor] = useState("purple");
    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"]

    const setNewColor = () => {
        let colorNumber = 0
        const likes = like + 2;

        if (likes % colorArray.length === 0) {
            colorNumber = colorArray.length - 1
        } else {
            colorNumber = likes % colorArray.length - 1
        }

        const currentColor = colorArray.slice(colorNumber, colorNumber + 1)
        setBgColor(currentColor);
    }


    return (

        <div className="like-button-disco">
            <button style={{ backgroundColor: bgColor }} onClick={() => { setLike(like + 1), setNewColor() }}>{like} Likes</button>
        </div>

    )
}