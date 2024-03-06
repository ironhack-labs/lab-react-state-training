const LikeButton = ({ like, setLike }) => {
  const addLike = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <button onClick={addLike} className="likeButt">
        {" "}
        {like} Likes{" "}
      </button>
    </div>
  );
};

export default LikeButton;
