import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";
import { useState } from "react";
function ClickablePicture(){
    const [clicked, setClicked] = useState(false);
    const cambiaFoto = () => {
    setClicked(!clicked);
  };
    return(
    <img className="gafas" src={clicked ? img2 : img1} alt="foto de perfil"
      onClick={cambiaFoto}/>
    );
}
export default ClickablePicture;