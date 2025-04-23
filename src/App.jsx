import "./App.css";
import ClickablePicture from "./Components/ClickablePicture";
import Counter from "./Components/Counter";
import LikeButton from "./Components/LikeButton";

function App() {
  return (
    <div className="App">
      <p><LikeButton /></p>
      <p><Counter></Counter></p>
      <p><ClickablePicture /></p>
    </div>
  );
}

export default App;
