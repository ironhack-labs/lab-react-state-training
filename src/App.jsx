import "./App.css";
import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";

import "./App.css";

const containerStyle = {
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: '10px',
}

function App() {
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px"
      }}
    >
      <h1> LAB | React Training</h1>
      
      <div style={containerStyle}>
        <h3>Like Buttons</h3>
        <LikeButton />
        <LikeButton />
      </div>

      <div style={containerStyle}>
        <h3>Counter</h3>
        <Counter />
      </div>

      <div style={containerStyle}>
        <h3>Clickable Picture Buttons</h3>
        <ClickablePicture />
      </div>

      <div style={containerStyle}>
        <h3>Dice</h3>
        <Dice />
      </div>
    </div>
  );
}

export default App;
