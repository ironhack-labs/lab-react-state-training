import { useState } from "react";

function LikeButton() {

    const [varLike, setVarLike] = useState(0)
    const updateLikes = () => {
        setVarLike(varLike + 1)
    }

    return (
            <button onClick={() => {updateLikes()}}>Likes {varLike}</button>
    );
}
export default LikeButton;