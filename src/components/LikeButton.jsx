const LikeButton = ({ increment, likes}) => {
   
    
  return (<button onClick={increment}>{likes} Likes</button>);
};

export default LikeButton;
