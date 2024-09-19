import { useState } from "react";

function ClickablePicture(){

    const [url, setUrl] = useState("./src/assets/images/maxence-glasses.png");


    const handleURL = () => {
        if(url === "./src/assets/images/maxence.png") setUrl("./src/assets/images/maxence-glasses.png");
        else setUrl("./src/assets/images/maxence.png");
    };

    return (
        <img onClick={handleURL} src={url} alt="picture img" />
    );
}

export default ClickablePicture;