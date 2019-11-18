import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Teams from "./components/Teams/teams";
import Officers from './components/Officers/officers'
import Advisors from './components/Advisors/advisors'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Teams />
      <Officers />
      <Advisors />
      <Footer />
    </div>
  );
}

export default App;
