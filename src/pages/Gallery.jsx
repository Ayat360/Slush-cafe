import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";

export default function Gallery() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4">
              Premium Moments
            </p>

            <h1 className="text-5xl md:text-7xl font-black font-luxury leading-tight text-white">
              Our <span className="text-yellow-500">Gallery</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              Every plate tells a story. Every moment carries a vibe.
              Explore the atmosphere, flavor and luxury behind Slush Cafe.
            </p>

          </div>
        </Reveal>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>

              <motion.div
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl ${
                  i === 1 || i === 4
                    ? "lg:mt-16"
                    : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">

                  {/* 👇 PUT YOUR IMAGE HERE */}
                  <img
                    src={`/gallery${item}.jpg`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                  {/* ICON */}
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <FiCamera className="text-yellow-500 text-lg" />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 p-6">

                    <h3 className="text-white text-2xl font-semibold mb-2">
                      Slush Experience
                    </h3>

                    <p className="text-gray-300 text-sm leading-6">
                      Premium dining atmosphere crafted with elegance and flavor.
                    </p>

                  </div>

                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/30 rounded-[30px] transition duration-500"></div>

              </motion.div>

            </Reveal>
          ))}

        </div>

        {/* BOTTOM SECTION */}
        <Reveal delay={0.4}>
          <div className="mt-24 text-center">

            <h2 className="text-3xl md:text-5xl font-bold text-white font-luxury">
              Taste The <span className="text-yellow-500">Luxury</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
              More than food. More than aesthetics.
              Slush Cafe is a complete premium experience built for unforgettable memories.
            </p>

            <button className="mt-10 relative overflow-hidden group bg-yellow-500 text-black px-10 py-4 rounded-full font-semibold tracking-wide shadow-[0_0_40px_rgba(255,215,0,0.4)]">

              <span className="relative z-10">
                Explore More
              </span>

              <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition duration-500 rounded-full"></span>

            </button>

          </div>
        </Reveal>

      </div>
    </section>
  );
}