import React, { useState } from "react";
import olsen from './../../assets/images/olsen.png'
import olsenCon from './../../assets/images/olsenCon.png'

const ClickablePicture = () => {
    const [olsenSin, setOlsenSin] = useState(false)

    const handleLike = () => {
        setOlsenSin(!olsenSin)
    }

    return (
        <div className="OlsenSize">
            <img
                src={olsenSin ? olsen : olsenCon}
                onClick={handleLike}
                alt="Olsen Photo"
            />

        </div>
    )

}

export default ClickablePicture