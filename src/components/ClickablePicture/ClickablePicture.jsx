import React, { useState } from 'react'

function ClickablePicture() {
    const [isShown, setIsShown] = useState(false);
    
    function showImage() {
        setIsShown((myBoolean) => !myBoolean)
    }

  return (
    <>
        <div className="pic" onClick={ showImage }>
            { 
                isShown ? <img src="/src/assets/images/maxence-glasses.png" alt="maxence" /> : 
                <img src="/src/assets/images/maxence.png" alt="maxence-glasses" /> 
            }
        </div>
    </>
  )
}

export default ClickablePicture