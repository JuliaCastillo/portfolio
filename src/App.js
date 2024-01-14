import React from "react";
import "./assets/css/styles.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
