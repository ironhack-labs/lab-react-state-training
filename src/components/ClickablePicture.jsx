import picture from "../assets/images/maxence.png";
import image from "../assets/images/maxence-glasses.png";

export const Clickable = ({clickable, setClickableState}) => {
    const handleClick = () => {
    setClickableState(!clickable);
}
return (
  <div className="clickable">
    {clickable ? (
      <img src={image} alt="image" id="image" onClick={handleClick} />
    ) : (
      <img src={picture} alt="picture" id="picture" onClick={handleClick} />
    )}
  </div>
);
}
