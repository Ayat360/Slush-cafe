import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

import {
  FiAward,
  FiClock,
  FiHeart,
  FiStar
} from "react-icons/fi";

export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-black text-white">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4">
              Premium Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-black font-luxury leading-tight">
              About <span className="text-yellow-500">Slush Cafe</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              We are not just serving food.
              We are building moments, atmosphere, luxury,
              and unforgettable taste crafted with passion.
            </p>
          </div>
        </Reveal>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <Reveal>
            <div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="text-yellow-500 uppercase tracking-[5px] text-sm mb-4">
                  Our Story
                </p>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Food crafted like
                  <span className="text-yellow-500"> art.</span>
                </h2>

                <p className="text-gray-300 leading-8 mb-6">
                  Slush Cafe was built for people who understand
                  that dining is more than eating.
                  It’s the music, the aroma, the lighting,
                  the atmosphere and the unforgettable first bite.
                </p>

                <p className="text-gray-400 leading-8">
                  Every plate leaving our kitchen carries
                  premium quality, rich culture and modern creativity.
                  From local flavors to luxury presentation —
                  everything is intentional.
                </p>

              </motion.div>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-5 mt-12">

                {/* CARD */}
                {[
                  {
                    icon: <FiAward />,
                    title: "Premium Quality",
                    text: "Fresh ingredients daily"
                  },
                  {
                    icon: <FiClock />,
                    title: "Fast Delivery",
                    text: "Quick & smooth service"
                  },
                  {
                    icon: <FiHeart />,
                    title: "Made With Love",
                    text: "Crafted passionately"
                  },
                  {
                    icon: <FiStar />,
                    title: "Top Rated",
                    text: "Loved by customers"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.02
                    }}
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 overflow-hidden group"
                  >

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition duration-500"></div>

                    <div className="relative z-10">

                      <div className="text-yellow-500 text-2xl mb-4">
                        {item.icon}
                      </div>

                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm mt-2">
                        {item.text}
                      </p>

                    </div>
                  </motion.div>
                ))}

              </div>

            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.2}>
            <div className="relative">

              {/* MAIN IMAGE */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
                className="relative h-[650px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,215,0,0.15)]"
              >

                {/* 👇 INSERT YOUR IMAGE */}
                <img
                  src="/about-food.jpg"
                  alt="About Slush Cafe"
                  className="w-full h-full object-cover"
                />

                {/* DARK FADE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              </motion.div>

              {/* FLOATING CARD 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
                className="absolute -left-8 bottom-10 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl"
              >
                <h3 className="text-4xl font-bold text-yellow-500">
                  10k+
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Happy Customers
                </p>
              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
                className="absolute -right-8 top-10 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl"
              >
                <h3 className="text-4xl font-bold text-yellow-500">
                  5★
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Luxury Experience
                </p>
              </motion.div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}