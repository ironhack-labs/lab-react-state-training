import { useState } from "react"

function DiscoButton() {

    const [numLikes, setNumLikes] = useState(0)
    const colorcicos = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [colorinchi ,setColorinchi] = useState("light gray")

    const handleParty = ()=>{
        setNumLikes(numLikes + 1)
        let index = Math.floor(Math.random() * colorcicos.length);
        setColorinchi(colorcicos[index])
    }
    return (
        <button onClick={handleParty} style={{background:colorinchi}}>{numLikes} Likes</button>
    )
    
}

export default DiscoButton