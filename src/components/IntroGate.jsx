import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

export default function IntroGate({ loading }) {

  // 🔥 SAFE PARTICLE DATA
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${5 + i * 4.5}%`,
      xMove: i % 2 === 0 ? -40 : 40,
      duration: 4 + (i % 5)
    }));
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center"
        >

          {/* 🔥 AMBIENT BACKGROUND */}
          <div className="absolute inset-0 bg-[#050505]" />

          {/* 🔥 GOLD GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="absolute w-[900px] h-[900px] rounded-full bg-yellow-500/10 blur-[160px]"
          />

          {/* 🌫️ SMOKE */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent)]"
          />

          {/* ✨ PARTICLES */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                y: 200,
                opacity: 0
              }}
              animate={{
                y: -1000,
                opacity: [0, 1, 0],
                x: [0, particle.xMove]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.id * 0.15
              }}
              style={{
                left: particle.left
              }}
              className="absolute bottom-0 w-2 h-2 rounded-full bg-yellow-500/60 blur-sm"
            />
          ))}

          {/* 🚪 LEFT DOOR */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 2,
              duration: 1.6,
              ease: [0.83, 0, 0.17, 1]
            }}
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black via-[#111] to-[#1a1a1a] border-r border-yellow-500/20 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
          >

            {/* INNER PANEL */}
            <div className="absolute inset-8 rounded-2xl border border-yellow-500/10" />

            {/* HANDLE */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-3 h-24 rounded-full bg-yellow-500/30 blur-[2px]" />

          </motion.div>

          {/* 🚪 RIGHT DOOR */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{
              delay: 2,
              duration: 1.6,
              ease: [0.83, 0, 0.17, 1]
            }}
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black via-[#111] to-[#1a1a1a] border-l border-yellow-500/20 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
          >

            {/* INNER PANEL */}
            <div className="absolute inset-8 rounded-2xl border border-yellow-500/10" />

            {/* HANDLE */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-3 h-24 rounded-full bg-yellow-500/30 blur-[2px]" />

          </motion.div>

          {/* 🔥 CENTER CONTENT */}
          <div className="relative z-20 text-center px-6">

            {/* BRAND */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              transition={{
                duration: 1
              }}
            >

              {/* MAIN TITLE */}
              <motion.h1
                animate={{
                  textShadow: [
                    "0 0 10px rgba(234,179,8,0.2)",
                    "0 0 40px rgba(234,179,8,0.7)",
                    "0 0 10px rgba(234,179,8,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="text-6xl md:text-8xl font-black tracking-[0.35em]"
              >
                SLUSH
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-yellow-500 text-2xl md:text-4xl tracking-[0.6em]"
              >
                CAFE
              </motion.h2>

            </motion.div>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-gray-400 uppercase tracking-[0.3em] text-xs md:text-sm"
            >
              Fine Dining • Luxury Taste • Premium Experience
            </motion.p>

            {/* 🔥 LOADER */}
            <div className="mt-10 w-72 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto">

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "220%" }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-[1px]"
              />

            </div>

          </div>

          {/* 💡 TOP LIGHT */}
          <motion.div
            animate={{
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-yellow-500/10 blur-[120px]"
          />

        </motion.div>

      )}

    </AnimatePresence>
  );
}