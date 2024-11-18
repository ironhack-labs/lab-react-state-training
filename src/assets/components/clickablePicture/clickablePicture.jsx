import { useState } from "react";

function ClickablePicture({ src, alt, toggleSrc, className = "" }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleClick = () => {
    setCurrentSrc((prevSrc) => (prevSrc === src ? toggleSrc : src));
  };
  return (
    <img
      className={`pe-auto mt-2 ${className}`}
      src={currentSrc}
      alt={alt}
      onClick={handleClick}
   
    />
  );
}

export default ClickablePicture;
