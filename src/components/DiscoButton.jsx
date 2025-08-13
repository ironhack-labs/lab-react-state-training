import { useState } from "react";
import LikeButton from "./LikeButton";

function DiscoButton() {
  const [bgColorIndex, setBgColorIndex] = useState(0)

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => setBgColorIndex((bgColorIndex + 1) % colors.length);
  return (
    <LikeButton color={colors[bgColorIndex]} onClickHandle={handleClick} />
  )
}
export default DiscoButton