import deselected from "../assets/images/maxence.png";
import selected from "../assets/images/maxence-glasses.png";
import React, { useState } from 'react';

const ClickablePicture = ({ handleClick }) => {

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
        handleClick()
    }

    const checkbox = isChecked ? selected : deselected;
    return (
        <div>
            <div onClick={toggleCheck}>
                <span> <img alt={'svtp-Checkbox'} src={checkbox} /></span>
            </div>
        </div>
    );
}

export default ClickablePicture;