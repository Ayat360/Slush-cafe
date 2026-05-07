import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative h-screen overflow-hidden flex items-center"
      >

        {/* BACKGROUND SLIDER */}
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            className={`absolute w-full h-full object-cover ${
              current === index ? "z-10" : "z-0"
            }`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.1
            }}
            transition={{ duration: 1.2 }}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70 z-20"></div>

        {/* GOLD GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent z-20"></div>

        {/* CONTENT */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <p className="uppercase tracking-[6px] text-yellow-500 mb-4 text-sm">
              Premium Restaurant Experience
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none font-luxury">
              SLUSH <br />
              <span className="text-yellow-500">
                CAFE
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
              Fine dining, unforgettable taste, premium atmosphere
              and food crafted like art.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              <Link to="/menu">
                <button className="relative overflow-hidden group bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold tracking-wide shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                  <span className="relative z-10">
                    ORDER ONLINE
                  </span>

                  <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition duration-500 rounded-full"></span>
                </button>
              </Link>

              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                Explore More
              </button>

            </div>

          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white"
        >
          ↓
        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}