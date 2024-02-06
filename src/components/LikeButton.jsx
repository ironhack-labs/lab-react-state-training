import {useState} from 'react'


function LikeButton() {
const [count, setCount] = useState(0);
const handleButtonClick = () => {
setCount(count +1);
};

return (
    <div>
    <p>{count} likes</p>
    <button onClick={handleButtonClick}>Like</button>
  </div>
);
}

export default LikeButton;