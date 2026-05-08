import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IntroGate from "./components/IntroGate";
import Navbar from "./components/Navbar";
import CartPanel from "./components/CartPanel";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 CINEMA INTRO */}
      <IntroGate loading={loading} />

      {/* 🔥 MAIN WEBSITE */}
      {!loading && (
        <BrowserRouter>

          {/* GLOBAL COMPONENTS */}
          <CursorGlow />
          <Navbar />
          <CartPanel />

          {/* PAGES */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* FOOTER */}
          <Footer />

        </BrowserRouter>
      )}
    </>
  );
}

export default App;