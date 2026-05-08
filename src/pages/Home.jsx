import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen overflow-hidden flex items-center bg-black"
      >

        {/* 🔥 BACKGROUND IMAGES */}
        <AnimatePresence>
          {images.map((image, index) =>
            current === index ? (
              <motion.img
                key={index}
                src={image}
                alt="Slush Cafe"
                initial={{
                  opacity: 0,
                  scale: 1.15
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut"
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null
          )}
        </AnimatePresence>

        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>

        {/* 🔥 GOLD CINEMATIC LIGHT */}
        <div className="absolute inset-0 z-10 overflow-hidden">

          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-yellow-500/20 blur-[180px]"
          />

          <motion.div
            animate={{
              x: ["20%", "-20%", "20%"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-500/10 blur-[170px]"
          />

        </div>

        {/* 🔥 GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.06] z-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-2 items-center gap-14">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >

              {/* TOP BADGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-md mb-8"
              >

                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>

                <p className="uppercase tracking-[4px] text-yellow-500 text-xs font-semibold">
                  Luxury Dining Experience
                </p>

              </motion.div>

              {/* BIG TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[4rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] font-black font-luxury"
              >
                SLUSH
                <br />

                <span className="text-yellow-500 relative inline-block">

                  CAFE

                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2
                    }}
                    className="absolute -bottom-2 left-0 h-2 w-full bg-yellow-500/30 blur-md"
                  />

                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-gray-300 text-lg leading-9 max-w-2xl"
              >
                Crafted meals. Premium atmosphere. Elite dining energy.
                Every plate hits different — built with flavor,
                culture, and luxury aesthetics designed for Lagos nightlife.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex flex-wrap gap-5"
              >

                {/* ORDER BUTTON */}
                <Link to="/menu">

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0px 0px 40px rgba(234,179,8,0.45)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-yellow-500 text-black px-10 py-5 rounded-full font-bold tracking-wide text-sm"
                  >

                    <span className="relative z-10">
                      ORDER ONLINE
                    </span>

                    {/* SHINE */}
                    <motion.div
                      animate={{
                        x: ["-120%", "220%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute top-0 left-0 w-1/3 h-full bg-white/50 blur-xl rotate-12"
                    />

                  </motion.button>

                </Link>

                {/* EXPLORE BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03
                  }}
                  whileTap={{
                    scale: 0.96
                  }}
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                  className="px-10 py-5 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 transition text-white font-medium"
                >
                  Explore Experience
                </motion.button>

              </motion.div>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 grid grid-cols-3 gap-6 max-w-2xl"
              >

                {[
                  {
                    number: "10K+",
                    text: "Happy Guests"
                  },
                  {
                    number: "5★",
                    text: "Luxury Rating"
                  },
                  {
                    number: "24/7",
                    text: "Fast Delivery"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 backdrop-blur-xl"
                  >

                    <h2 className="text-3xl font-black text-yellow-500">
                      {item.number}
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.text}
                    </p>

                  </div>
                ))}

              </motion.div>

            </motion.div>

            {/* RIGHT SIDE FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden lg:flex justify-end"
            >

              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[420px] h-[520px] rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.6)]"
              >

                <img
                  src={images[current]}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-8">

                  <p className="uppercase tracking-[4px] text-yellow-500 text-xs mb-3">
                    Signature Meal
                  </p>

                  <h2 className="text-4xl font-black leading-tight">
                    Taste The
                    <br />
                    Luxury
                  </h2>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* 🔥 SCROLL INDICATOR */}
        <motion.div
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >

          <div className="flex flex-col items-center gap-3">

            <p className="text-xs tracking-[4px] text-gray-400 uppercase">
              Scroll
            </p>

            <div className="w-7 h-12 border border-white/20 rounded-full flex justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 12, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5
                }}
                className="w-1 h-3 bg-yellow-500 rounded-full"
              />
            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= SECTIONS ================= */}
      <section id="about">
        <About />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}