import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FloatingActionButton from "./components/FloatingActionButton";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NotFoundPage from "./Pages/NotFound";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <FloatingActionButton />
      </BrowserRouter>
    </>
  );
}

export default App;
