import { useState } from "react"

function DiscoButton() {

    const [firstLike, setFirstLike] = useState(0)
    const [secondLike, setSecondLike] = useState(0)
    const [firstColor, setFirstColor] = useState(0)
    const [secondColor, setSecondColor] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const addFirstLike = () => {
        setFirstLike((prevCount) => prevCount + 1);
        setFirstColor((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const addSecondLike = () => {
        setSecondLike((prevCount) => prevCount + 1);
        setSecondColor((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div className="likes-container">
            <button 
                onClick={addFirstLike} 
                style={{ backgroundColor: colors[firstColor] }}
            >
                {firstLike} Likes
            </button>
            <button 
                onClick={addSecondLike} 
                style={{ backgroundColor: colors[secondColor] }}
            >
                {secondLike} Likes
            </button>
        </div>
    );
}
export default DiscoButton;