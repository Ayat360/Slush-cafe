import { motion, AnimatePresence } from "framer-motion";

export default function IntroGate({ openDoors }) {
  return (
    <AnimatePresence>
      <motion.div className="relative w-full h-screen bg-black overflow-hidden">
        {Array.from({length: 5}).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity
            }}
            className="absolute bottom-0 left-1/2 w-32 h-32 rounded-full bg-white/10 blur-3xl"
          />
        ))}

        {/* 🚪 LEFT DOOR */}
        <motion.div
          animate={{
            x: openDoors ? "-100%" : "0%"
          }}
          transition={{
            duration: 1.8,
            ease: [0.76, 0, 0.24, 1]
          }}
          className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#1a1a1a] via-black to-[#111] border-r border-yellow-500/20 shadow-[0_0_60px_rgba(234,179,8,0.2)]"
        >

          {/* GOLD LINE */}
          <div className="absolute right-0 top-0 w-[2px] h-full bg-yellow-500/40" />

        </motion.div>

        {/* 🚪 RIGHT DOOR */}
        <motion.div
          animate={{
            x: openDoors ? "100%" : "0%"
          }}
          transition={{
            duration: 1.8,
            ease: [0.76, 0, 0.24, 1]
          }}
          className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#1a1a1a] via-black to-[#111] border-l border-yellow-500/20 shadow-[0_0_60px_rgba(234,179,8,0.2)]"
        >

          {/* GOLD LINE */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-yellow-500/40" />

        </motion.div>

        {/* 🍽️ LOGO */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center"
        >

          <h1 className="text-5xl md:text-7xl font-black tracking-[8px] text-white font-luxury drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            SLUSH
          </h1>

          <h2 className="text-yellow-500 text-2xl tracking-[12px] mt-3 font-semibold">
            CAFE
          </h2>

          <p className="text-gray-400 text-sm mt-6 tracking-[4px] uppercase">
            Premium Food Experience
          </p>

        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}