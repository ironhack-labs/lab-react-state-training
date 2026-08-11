import { useState } from "react";
import imgWithoutGlasses from '../assets/images/maxence.png';
import imgWithGlasses from '../assets/images/maxence-glasses.png';

function ClickablePicture() {

    const [withGlasses, setWithGlasses] = useState(true);

    return (
        <img src={ withGlasses ? imgWithGlasses : imgWithoutGlasses } onClick={() => setWithGlasses(!withGlasses)} width={200} alt="image" />
    );
}

export default ClickablePicture;