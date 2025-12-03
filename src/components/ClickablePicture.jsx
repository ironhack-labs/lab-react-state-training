import { useState } from "react";
import picNormal from "../assets/images/Anderson.jpg";
import picWithGlasses from "../assets/images/Anderson-glasses.jpg";

function ClickablePicture() {
    const [image, setImage] = useState(picNormal);

    const toggleImage = () => {
        setImage((prev) => (prev === picNormal ? picWithGlasses : picNormal));
    };

    return (
        <div className="Box">
            <section>
                <h2>Iteración 3 | Estado:ClickablePicture</h2>
                <img
                    className="clickable-img"
                    src={image}
                    alt="clickable"
                    onClick={toggleImage}
                />
            </section>

        </div>
    );
}

export default ClickablePicture;