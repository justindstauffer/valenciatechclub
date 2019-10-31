import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Test from "./components/testcontent";
import About from "./components/about";
import Teams from "./components/Teams/teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Test />
      <About />
      <Teams />
    </div>
  );
}

export default App;
