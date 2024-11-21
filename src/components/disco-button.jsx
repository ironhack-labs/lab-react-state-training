import { useState } from "react";
import LikeButton from "./like-button";

function DiscoButton({className = ""}) {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [currentColor, setCurrentColor] = useState(0);

    return (
        <LikeButton
            className={className}
            style={{ backgroundColor: colors[currentColor] }}
            onClickOverride={() => {
                setCurrentColor((currentColor + 1) % colors.length);
            }}/>
    );
}

export default DiscoButton;