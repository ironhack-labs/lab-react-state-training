import {useState} from "react"

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

function DiscoButton() {

    const [likes, setLikes] = useState(0)

    const colorIndex = likes % colors.length

    function handleClick() {
        setLikes(likes + 1)

    }

    return (
        <button className="disco-button"
        style={{backgroundColor: colors[colorIndex]}}
        onClick={handleClick}>
        {likes} Likes    
        </button>

   )

}

export default DiscoButton