import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/dogs"> Dogs</Link>
      <Link to="/dice">Dice</Link>
    </nav>
  );
}
