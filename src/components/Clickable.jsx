import React from 'react'
import firstImg from '../assets/images/maxence.png'
import secondImg from '../assets/images/maxence-glasses.png'
import { useState } from 'react'

function Clickable() {

    const [firstDisplay, setSeondDisplay] = useState(firstImg);

    const toggleImages = () => {
        setSeondDisplay(firstDisplay === firstImg ? secondImg : firstImg);
    };

  return (
    <div>
        <img onClick={toggleImages} src={firstDisplay} />
    </div>
  )
}

export default Clickable;