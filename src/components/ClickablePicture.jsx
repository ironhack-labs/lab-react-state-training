import React, {useState} from 'react'

const ClickablePicture = () => {
    const [picClick, setPicClick] = useState(false)

    function handleClick(){
        setPicClick(!picClick)
    }

    return(
        <div>
            <img></img>
        </div>
    )
}

export default ClickablePicture