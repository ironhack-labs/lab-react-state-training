import React, { useState } from 'react'

function ClickablePicture() {

    // states
    const [pictureValue, setPictureValue] = useState("src/assets/images/maxence.png")

    //functions

    function handleToggleImg(){
        
        const img1 = "src/assets/images/maxence.png"
        const img2= "src/assets/images/maxence-glasses.png"

        if (pictureValue === img1){
            return setPictureValue(img2)
        } else if (pictureValue === img2)
            return setPictureValue(img1)
    }

    //JSX return

  return (
    <div>
        <img onClick={handleToggleImg} src={pictureValue} alt="" />
    </div>
  )
}

export default ClickablePicture