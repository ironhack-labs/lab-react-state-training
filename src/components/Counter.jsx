import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Increment clicked!");
    setCount(count + 1);
  };

const decrement = () => {
  if (count > 0) {
    console.log("Decrement clicked!");
    setCount(count - 1);
  } else {
    console.log("Count is already 0, cannot decrement");
  }
};

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        fontSize: "22px",
        fontFamily: "Arial",
      }}
    >
      <button
        onClick={decrement}
        style={{
          padding: "10px 15px",
          fontSize: "20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "2px solid #888",
          background: "#f3f3f3",
        }}
      >
        –
      </button>

      <span
        style={{
          minWidth: "40px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {count}
      </span>

      <button
        onClick={increment}
        style={{
          padding: "10px 15px",
          fontSize: "20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "2px solid #888",
          background: "#f3f3f3",
        }}
      >
        +
      </button>
    </div>
  );
}
