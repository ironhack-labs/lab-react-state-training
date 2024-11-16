import { useState } from "react";
import './DiscoButton.css'

function DiscoButton (){

    const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
    const randomNumber = Math.floor(Math.random()*colorsArray.length);
    const currentColor = colorsArray[randomNumber];
    const [likes, setLikes] =useState(0);
    const countLikes = ()=>{
        setLikes(prevLikes => prevLikes + 1);
    }

    return (
        <button
          className="disco-button"
          onClick={countLikes}
          style={{ backgroundColor: currentColor }}
        >
          {likes} {likes === 1 ? "like" : "likes"}
        </button>
    );
}

export default DiscoButton;