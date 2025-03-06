import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FloatingActionButton from "./components/FloatingActionButton";
import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Lazy loading pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const Projects = lazy(() => import("./Pages/Projects"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <>
      <Helmet>
        <title>Pinnacle Window | Best uPVC & Aluminium Windows & Doors</title>
        <meta
          name="description"
          content="Explore high-quality uPVC and aluminum doors and windows with expert installation. Get energy-efficient, durable, and stylish solutions for your home or office."
        />
        <meta
          name="keywords"
          content="uPVC windows, aluminum doors, energy-efficient windows, home improvement, custom windows, sliding doors"
        />
      </Helmet>

      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
      </BrowserRouter>
    </>
  );
}

export default App;
