
import Image1 from "../assets/images/maxence.png";
import Image2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = ({defaultImage, setDefaultImage}) => {
    const changePhoto = () => {
        setDefaultImage(!defaultImage);
    }
   
  return (
    <div>
      <img src={defaultImage ? Image2 : Image1} alt="" 
      onClick={changePhoto} />

      <img src="" alt="" />
    </div>
  )
}

export default ClickablePicture
