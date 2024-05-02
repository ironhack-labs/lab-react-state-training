import { useState } from "react"
function LikeButton() {
    const [number, setNumber] = useState(0);
    const giveLikes = ()=> {
        setNumber(number + 1)
    }
    return (
<div>
    <button onClick={()=> {setNumber(number + 1)}}>
{number} Likes
    </button>
</div>
    )
}
export default LikeButton