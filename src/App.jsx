import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import background from "./images/pexels-photo-325185.jpeg";

export default function App() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          padding: "50px",
        }}
      >
        <div style={{ textAlign: "center", fontFamily: "poppins" }}>
          <h1>Calculator</h1>
        </div>

        <Layout></Layout>
      </div>
    </div>
  );
}
