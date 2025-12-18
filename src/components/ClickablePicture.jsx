
function ClickablePicture() {
  // Images are from the local assets/images folder
  const img = "/src/assets/images/maxence.png";
  const imgClicked = "/src/assets/images/maxence-glasses.png";
  const [clicked, setClicked] = useState(false); // true = glasses, false = normal
  // Toggle image when clicked
  return (
    <img
      src={clicked ? imgClicked : img}
      alt="Clickable"
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
