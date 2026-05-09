import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[36px] p-10 backdrop-blur-2xl"
      >

        <h1 className="text-5xl font-black mb-10">
          Payment
        </h1>

        <div className="space-y-5">

          <input
            placeholder="Card Number"
            className="w-full p-5 bg-black/40 rounded-2xl border border-white/10"
          />

          <div className="grid grid-cols-2 gap-5">

            <input
              placeholder="MM / YY"
              className="p-5 bg-black/40 rounded-2xl border border-white/10"
            />

            <input
              placeholder="CVV"
              className="p-5 bg-black/40 rounded-2xl border border-white/10"
            />

          </div>

          <input
            placeholder="Card Holder Name"
            className="w-full p-5 bg-black/40 rounded-2xl border border-white/10"
          />

        </div>

        <Link to="/success">

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(255,215,0,0.3)"
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-8 py-5 rounded-2xl bg-yellow-500 text-black font-black text-lg"
          >
            Pay ₦45,500
          </motion.button>

        </Link>

      </motion.div>
    </div>
  );
}