import React, { useState } from 'react';

function LikeButton () {

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return(<button onClick={() => setCount(count + 1)}>{ count } Likes</button>)
}

export default LikeButton;