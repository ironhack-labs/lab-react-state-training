import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

function DiscoButton(){
    const [colorPosition, setColorPosition] = useState(0)
    const [count, setCount] = useState(0);
const clickHandler = () => {
    setCount(count+1);
    if (colorPosition > colors.length-1) {
        setColorPosition(0);
    }
    else {
        setColorPosition(colorPosition+1);
    }
}

    return <>
   <button style={{ backgroundColor: colors[colorPosition] }} type="button" onClick={clickHandler}>
      {count} Likes
    </button>
    </>
}

export default DiscoButton;