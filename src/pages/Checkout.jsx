import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiUser,
  FiCreditCard,
  FiShoppingBag
} from "react-icons/fi";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.amount || 0) * item.qty,
    0
  );

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-black text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[160px] rounded-full"></div>

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto mb-14 text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black font-luxury"
        >
          Checkout
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Finalize your premium food experience with secure ordering and fast delivery.
        </motion.p>

      </div>

      {cart.length === 0 ? (

        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-24">

          <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <FiShoppingBag
              size={42}
              className="text-yellow-500"
            />
          </div>

          <h2 className="text-3xl font-bold mt-8">
            Your Cart Is Empty
          </h2>

          <p className="text-gray-400 mt-3">
            Add delicious meals before checkout 🍽️
          </p>

        </div>

      ) : (

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">

          {/* ================= ORDER SUMMARY ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          >

            {/* HEADER */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  Order Summary
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {totalItems} item{totalItems > 1 && "s"} added
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <FiShoppingBag
                  className="text-yellow-500"
                  size={24}
                />
              </div>

            </div>

            {/* ITEMS */}
            <div className="p-6 space-y-5 max-h-[500px] overflow-y-auto custom-scrollbar">

              {cart.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 bg-black/40 border border-white/10 rounded-2xl p-4 hover:border-yellow-500/20 transition"
                >

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-2xl">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover hover:scale-110 transition duration-500"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                          {item.price}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          Qty
                        </p>

                        <h2 className="font-bold">
                          x{item.qty}
                        </h2>
                      </div>

                    </div>

                    {/* ITEM TOTAL */}
                    <div className="mt-4 flex justify-between items-center">

                      <p className="text-gray-400 text-sm">
                        Item Total
                      </p>

                      <h2 className="text-yellow-500 text-xl font-bold">
                        ₦
                        {(
                          (item.amount || 0) * item.qty
                        ).toLocaleString()}
                      </h2>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* TOTAL */}
            <div className="border-t border-white/10 p-6 bg-black/30">

              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-400">
                  Total Items
                </p>

                <h2 className="font-bold text-lg">
                  {totalItems}
                </h2>
              </div>

              <div className="flex justify-between items-center">

                <p className="text-gray-400 text-lg">
                  Grand Total
                </p>

                <h1 className="text-4xl font-black text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  ₦{totalPrice.toLocaleString()}
                </h1>

              </div>

            </div>

          </motion.div>

          {/* ================= CUSTOMER FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          >

            {/* HEADER */}
            <div className="p-6 border-b border-white/10">

              <h2 className="text-2xl font-bold">
                Customer Information
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Delivery details & contact information
              </p>

            </div>

            {/* FORM */}
            <div className="p-6 space-y-5">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Full Name
                </label>

                <div className="flex items-center bg-black/50 border border-white/10 rounded-2xl px-4">

                  <FiUser className="text-yellow-500" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent p-4 outline-none"
                  />

                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Phone Number
                </label>

                <div className="flex items-center bg-black/50 border border-white/10 rounded-2xl px-4">

                  <FiPhone className="text-yellow-500" />

                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full bg-transparent p-4 outline-none"
                  />

                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Delivery Address
                </label>

                <div className="flex items-start bg-black/50 border border-white/10 rounded-2xl px-4">

                  <FiMapPin className="text-yellow-500 mt-5" />

                  <textarea
                    placeholder="Enter full delivery address"
                    className="w-full bg-transparent p-4 outline-none h-32 resize-none"
                  />

                </div>
              </div>

              {/* PAYMENT */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Payment Method
                </label>

                <div className="flex items-center bg-black/50 border border-white/10 rounded-2xl px-4">

                  <FiCreditCard className="text-yellow-500" />

                  <select className="w-full bg-transparent p-4 outline-none">

                    <option className="bg-black">
                      Pay On Delivery
                    </option>

                    <option className="bg-black">
                      Card Payment
                    </option>

                    <option className="bg-black">
                      Bank Transfer
                    </option>

                  </select>

                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0px 0px 25px rgba(234,179,8,0.35)"
                }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden w-full py-5 rounded-2xl bg-yellow-500 text-black font-bold text-lg shadow-lg mt-6"
              >

                <span className="relative z-10">
                  Confirm Order
                </span>

                {/* SHINE */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-white/30 blur-xl rotate-12"
                />

              </motion.button>

            </div>

          </motion.div>

        </div>

      )}

    </section>
  );
}