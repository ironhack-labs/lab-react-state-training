import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>LAB | React Training</h1>

      {/* Like Buttons section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <LikeButton />
        <LikeButton />
      </div>

      {/* Counter Section */}
      <div
        style={{
          marginBottom: "40px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>Counter</h2>
        <Counter />
      </div>

      {/* Clickable Picture */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>Clickable Picture</h2>
        <ClickablePicture />
      </div>
    </div>
  );
}

export default App;
