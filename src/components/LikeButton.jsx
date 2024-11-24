function LikeButton() {
  let likes = 0; 

  function handleClick(event) {
    likes++;
    event.target.textContent = `${likes} Likes`; 
  }

  return (
    <button onClick={handleClick}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
