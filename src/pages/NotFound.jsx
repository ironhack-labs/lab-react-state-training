import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found </h1>
      <Link to="/">Go back Home</Link>
    </div>
  );
} 
