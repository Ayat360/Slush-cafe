import { motion } from "framer-motion";


export default function LightningTrails() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">

      {/* LIGHTNING 1 */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
          y: ["0%", "10%", "-5%", "0%"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[15%] left-0 w-[300px] h-[2px]"
      >
        <div className="relative w-full h-full">

          <div className="absolute inset-0 bg-cyan-400 blur-md opacity-80"></div>

          <div className="absolute inset-0 bg-white"></div>

        </div>
      </motion.div>

      {/* LIGHTNING 2 */}
      <motion.div
        animate={{
          x: ["-30%", "130%"],
          y: ["0%", "-10%", "5%", "0%"]
        }}
        transition={{
          duration: 6,
          delay: 0.8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[45%] left-0 w-[260px] h-[2px]"
      >
        <div className="relative w-full h-full">

          <div className="absolute inset-0 bg-yellow-400 blur-md opacity-80"></div>

          <div className="absolute inset-0 bg-white"></div>

        </div>
      </motion.div>

      {/* LIGHTNING 3 */}
      <motion.div
        animate={{
          x: ["-40%", "140%"],
          y: ["0%", "15%", "-10%", "0%"]
        }}
        transition={{
          duration: 7,
          delay: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[75%] left-0 w-[340px] h-[2px]"
      >
        <div className="relative w-full h-full">

          <div className="absolute inset-0 bg-orange-400 blur-md opacity-80"></div>

          <div className="absolute inset-0 bg-white"></div>

        </div>
      </motion.div>

      {/* FLASH GLOW */}
      <motion.div
        animate={{
          opacity: [0, 0.08, 0]
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="absolute inset-0 bg-white"
      />

    </div>
  );
}