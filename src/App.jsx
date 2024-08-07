import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import LikeButton from "./components/likeButton";

function App() {
 
    return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <div>
        <LikeButton />
        <ClickablePicture />
      </div>

    </div>
  );
}

export default App;
