import { useState } from "react"

function ClickablePicture() {

    const pictures = ["src/assets/images/maxence.png", "src/assets/images/maxence-glasses.png"];

    const [pictureId, setPictureId] = useState(0);

    const changePicture = () => {
        setPictureId((prevIdx) => {
            return (prevIdx + 1) % pictures.length;
        });
    };

    return <div className='pic' >
        <img src={pictures[pictureId]} onClick={changePicture} />
    </div>

}

export default ClickablePicture