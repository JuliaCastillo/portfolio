import React from "react";
import "./assets/css/styles.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
