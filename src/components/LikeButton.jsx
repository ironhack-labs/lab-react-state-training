export const LikeButton = ({like, addLike}) => {
  return (

    <button onClick={addLike}> {like} Likes </button>
  )
}
