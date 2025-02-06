import {useState} from 'react';

const colorChoice = ["purple", "blue", "green", "yellow", "orange", "red"];
export default function DiscoButton() {
    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState("purple")

    const likesUp = () => {
        setLikes(likes => likes + 1);
        setColor(color => color = colorChoice[Math.floor(Math.random() * colorChoice.length)])
    }

    return (
      <>
        <button onClick={likesUp} style={{backgroundColor: color}}>{likes} Likes</button>
      </>
    );
}