function ClickablePicture() {
    function toggleImage(event) {
      const currentSrc = event.target.src;
      const newSrc = currentSrc.endsWith("maxence.png")
        ? "/src/assets/images/maxence-glasses.png"
        : "/src/assets/images/maxence.png";
      event.target.src = newSrc;
    }
  
    return (
      <img
        src="/src/assets/images/maxence.png"
        alt="Clickable Person"
        style={{ cursor: "pointer", width: "200px", height: "auto" }}
        onClick={toggleImage}
      />
    );
  }
  
  export default ClickablePicture;