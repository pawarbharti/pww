import "./App.css";
import Navbar from "./components/Navbar";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
