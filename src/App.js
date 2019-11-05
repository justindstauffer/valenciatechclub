import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Teams from "./components/Teams/teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Teams />
    </div>
  );
}

export default App;
