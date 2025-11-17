import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      
      <div style={{ display: "flex", gap: "10px" }}>
      <LikeButton />
      <LikeButton />
      </div>
      
      <div>
        <Counter />
      </div>


      <div>
        <ClickablePicture />
      </div>
    </div>
  );
}

export default App;
