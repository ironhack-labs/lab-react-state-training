import { useState } from "react";
import Button from "../uiComponents/button";

const LikeButton = ({id, style}) => {
  const [likeButton, setLikeButton] = useState(0);

  const incrementHandler = () => {
    setLikeButton((prevLike) => prevLike + 1);
  };

  return <>
  {/* <button className="likeBtn" style={style && style} onClick={incrementHandler} id={id && id}>{likeButton} Likes</button> */}

  <Button className="likeBtn" id={id} style={style && style} onClick={incrementHandler}>{likeButton} Likes</Button>
  </>;
};
export default LikeButton;
