import { useState } from "react";
function DiscoButton(){
    const [like, setLike] = useState(0);
    const [like2, setLike2] = useState(0)

    return (
        
        <section style={{ display: "flex", border: "2px solid black" }}>
        <section>
            <button onClick={() => setLike(like + 1)}>{like} Likes</button>
            <button onClick={() => setLike2(like2 + 1)}>{like2} Likes</button>
        </section>
        </section>
    );

}


export default DiscoButton