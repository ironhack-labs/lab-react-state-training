import React from 'react';
import { useState } from "react";

function LikeButton() {

    const [likes, countLikes] = useState(0)
    const [likesTwo, countLikesTwo] = useState(0)

    const increaseLikes = () => {
        countLikes(likes + 1);
    };

    const increaseLikesTwo = () => {
        countLikesTwo(likesTwo + 1);
    };

    return (
        <div id="buttons">
            <section>
                <button onClick={increaseLikes}> {likes} Likes</button>
                <button onClick={increaseLikesTwo}> {likesTwo} Likes</button>
            </section>
        </div>
    )
}

export default LikeButton;