let currentIndex = 0;

function Carousel({ images }) {
  function handleLeftClick(event) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    const imgElement = event.target.parentElement.querySelector("img");
    imgElement.src = images[currentIndex];
  }

  function handleRightClick(event) {
    currentIndex = (currentIndex + 1) % images.length;

    const imgElement = event.target.parentElement.querySelector("img");
    imgElement.src = images[currentIndex];
  }

  const initialSrc = images[currentIndex];

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img
        src={initialSrc}
        alt="Carousel"
        style={{ width: "200px", height: "auto", margin: "0 10px" }}
      />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;