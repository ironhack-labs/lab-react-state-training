import { useState } from "react"

function Carousel ({images}) {

    const [index, setIndex] = useState(0)

    const followingPicture = () => {
        index < images.length - 1 ? setIndex (index + 1) : null
    }

    const previousPicture = () => {
       index > 0 ? setIndex (index - 1) : null
    }
    
    return <> 
        <button onClick={previousPicture}> Left </button>
        <img src={images[index]} />
        <button onClick={followingPicture}> Right </button>
    </>
}

export default Carousel