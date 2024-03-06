import photo2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = ({ picture, setPicture }) => {
  const changePic = () => {
    setPicture(photo2);
  };
  return (
    <div>
      <img src={picture} onClick={changePic} />
    </div>
  );
};

export default ClickablePicture;
