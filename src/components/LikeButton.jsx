import './LikeButton.css';
import { useState } from 'react';

const ClickButton = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div className="clickButton">
            <button onClick={handleClick}>{clickCount}
            </button>
        </div>
    );
};

export default ClickButton;

