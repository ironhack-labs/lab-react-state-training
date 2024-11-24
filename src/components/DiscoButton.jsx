let likeCount = 0;
let colorIndex = 0;

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  function handleClick(event) {
    likeCount += 1; 
    colorIndex = (colorIndex + 1) % colors.length; // Move to the next color

    event.target.innerText = `${likeCount} Likes`;
    event.target.style.backgroundColor = colors[colorIndex];
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      {likeCount} Likes
    </button>
  );
}

export default DiscoButton;