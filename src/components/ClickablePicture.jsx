import { useState } from "react";
import imgDiego from "../assets/images/foto.png";
import imgGafas from "../assets/images/gafas.png";

function ClickablePicture() {
  let [imagenGafas, setImagenGafas] = useState(false)

  const handlePutImage = () => {
    setImagenGafas((imagenGafas) => (imagenGafas === false ? true : false))
  }

  return (
    <div style={{ position: "relative" }}>
      <img
        onClick={handlePutImage}
        style={{ width: "300px" }}
        src={imgDiego}
        alt="foto"
      />

      {imagenGafas === true ? (
        <img
          style={{
            width: "200px",
            position: "absolute",
            left: "30px",
            top: "60px",
          }}
          src={imgGafas}
          alt="foto"
        />
      ) : null}
    </div>
  );
}

export default ClickablePicture;
