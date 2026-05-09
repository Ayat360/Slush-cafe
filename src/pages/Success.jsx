import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

export default function Success() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 text-white">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full text-center bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl"
      >

        {/* ICON */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
          className="w-36 h-36 rounded-full bg-green-500 flex items-center justify-center mx-auto shadow-[0_0_80px_rgba(34,197,94,0.4)]"
        >
          <FiCheck size={70} />
        </motion.div>

        <h1 className="text-5xl font-black mt-10">
          Order Successful
        </h1>

        <p className="text-gray-400 mt-5 leading-8">
          Your food is now being prepared by our chefs.
          Delivery rider go soon dey your gate 😭🔥
        </p>

        {/* RECEIPT */}
        <div className="mt-10 bg-black/40 border border-white/10 rounded-3xl p-6 text-left">

          <div className="flex justify-between mb-4">
            <span className="text-gray-400">
              Order ID
            </span>

            <span className="font-bold text-yellow-500">
              #SLUSH-2026
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-400">
              Payment
            </span>

            <span>
              Successful
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Estimated Delivery
            </span>

            <span>
              20 - 30 mins
            </span>
          </div>

        </div>

        <Link to="/">

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 w-full py-5 rounded-2xl bg-yellow-500 text-black font-black text-lg"
          >
            Back To Home
          </motion.button>

        </Link>

      </motion.div>

    </div>
  );
}