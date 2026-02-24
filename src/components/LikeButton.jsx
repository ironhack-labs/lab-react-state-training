function LikeButton({ count, color, onClick }) {
  const likeSynthax = count <= 1 ? 'Like' : 'Likes';

  return (
    <>
      <button onClick={onClick} style={{ background: color }}>
        {count} {likeSynthax}
      </button>
    </>
  );
}
export default LikeButton;
