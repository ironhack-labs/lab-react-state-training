import { useState } from "react";

function clickablePicture({ img, imgClicked, className = '' }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => { 
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${className}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={isClicked ? imgClicked : img}
        alt="Clickable"
        className="img-fluid rounded"
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
}

export default clickablePicture;
