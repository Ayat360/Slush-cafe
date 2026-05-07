import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import {
  FiX,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutModal from "./CheckoutModal";

export default function CartPanel() {
  const {
    cart,
    isOpen,
    toggleCart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.amount || 0) * item.qty,
    0
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🔥 BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
            />

            {/* 🔥 PANEL */}
            <motion.div
              initial={{ x: 450 }}
              animate={{ x: 0 }}
              exit={{ x: 450 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 180
              }}
              className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-black/80 backdrop-blur-3xl z-50 border-l border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <div className="h-[2px] w-full bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

              {/* 🔥 GLOW */}
              <div className="absolute top-0 left-0 w-full h-60 bg-yellow-500/10 blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none"></div>
              {/* ================= HEADER ================= */}
              <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 backdrop-blur-xl bg-white/2">

                <div>
                  <h2 className="text-2xl font-bold font-luxury">
                    Your Cart
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    {totalItems} item{totalItems !== 1 && "s"} added
                  </p>
                </div>

                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleCart}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-yellow-500/40 transition"
                >
                  <FiX size={20} />
                </motion.button>

              </div>

              {/* ================= ITEMS ================= */}
              <div className="relative z-10 flex-1 overflow-y-auto px-5 py-5 h-[calc(100%-220px)] custom-scrollbar">

                {cart.length === 0 ? (

                  <div className="h-full flex flex-col items-center justify-center text-center">

                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <FiShoppingBag
                        size={40}
                        className="text-yellow-500"
                      />
                    </div>

                    <h2 className="text-2xl font-semibold">
                      Cart Empty
                    </h2>

                    <p className="text-gray-400 mt-3 max-w-xs leading-7">
                      Your delicious meals are waiting for you 🍽️
                    </p>
                    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={toggleCart}
  className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold"
>
  Explore Menu
</motion.button>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {cart.map((item, i) => (

                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        className="relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-yellow-500/30 hover:shadow-[0_0_25px_rgba(234,179,8,0.08)] transition duration-500"
                      >

                        <div className="flex gap-4 p-4">

                          {/* IMAGE */}
                          <div className="relative overflow-hidden rounded-2xl">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/10"></div>

                          </div>

                          {/* CONTENT */}
                          <div className="flex-1">

                            <div className="flex justify-between items-start gap-3">

                              <div>
                                <h3 className="font-semibold text-base">
                                  {item.name}
                                </h3>

                                <p className="text-gray-400 text-sm mt-1">
                                  {item.price}
                                </p>
                              </div>

                              {/* REMOVE */}
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.name)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <FiTrash2 size={18} />
                              </motion.button>

                            </div>

                            {/* PRICE */}
                            <div className="mt-3 flex items-center justify-between">

                              <div>
                                <p className="text-yellow-500 font-bold text-lg">
                                  ₦
                                  {(
                                    (item.amount || 0) * item.qty
                                  ).toLocaleString()}
                                </p>
                              </div>

                              {/* QTY */}
                              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-full px-3 py-2">

                                <motion.button
                                  whileTap={{ scale: 0.85 }}
                                  onClick={() =>
                                    decreaseQty(item.name)
                                  }
                                  className="text-gray-300 hover:text-white"
                                >
                                  <FiMinus size={14} />
                                </motion.button>

                                <span className="font-semibold min-w-5 text-center">
                                  {item.qty}
                                </span>

                                <motion.button
                                  whileTap={{ scale: 0.85 }}
                                  onClick={() =>
                                    increaseQty(item.name)
                                  }
                                  className="text-gray-300 hover:text-white"
                                >
                                  <FiPlus size={14} />
                                </motion.button>

                              </div>

                            </div>

                          </div>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                )}

              </div>

              {/* ================= FOOTER ================= */}
              {cart.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full p-5 border-t border-white/10 bg-[#0b0b0b]/90 backdrop-blur-2xl">

                  {/* TOTAL */}
                  <div className="flex items-center justify-between mb-5">

                    <div>
                      <p className="text-gray-400 text-sm">
                        Total Price
                      </p>

                      <h2 className="text-4xl font-black text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.35)]">
                        ₦{totalPrice.toLocaleString()}
                      </h2>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-400 text-sm">
                        Total Items
                      </p>

                      <h2 className="text-xl font-semibold">
                        {totalItems}
                      </h2>
                    </div>

                  </div>

                  {/* BUTTON */}
                  <motion.button
                    onClick={() => setIsCheckout(true)}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0px 0px 25px rgba(234,179,8,0.35)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden w-full py-4 rounded-2xl bg-yellow-500 text-black font-bold text-lg tracking-wide shadow-lg"
                  >

                    <span className="relative z-10">
                      Proceed To Checkout
                    </span>

                    {/* SHINE EFFECT */}
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
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔥 CHECKOUT MODAL */}
      <CheckoutModal
        isCheckout={isCheckout}
        setIsCheckout={setIsCheckout}
      />
    </>
  );
}