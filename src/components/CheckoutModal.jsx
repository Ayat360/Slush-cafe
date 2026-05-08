import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutModal({ isCheckout, setIsCheckout }) {
  const { cart } = useContext(CartContext);

  const handleOrder = () => {
  alert("Order placed successfully!");
};
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
  (sum, item) => sum + (Number(item.amount) || 0) * (item.qty || 0),
  0
);
  return (
    <AnimatePresence>
      {isCheckout && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsCheckout(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] p-6 rounded-xl z-50 w-[90%] max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-xl mb-4">Checkout</h2>

            {cart.map((item, i) => {
  const itemTotal = (item.amount || 0) * (item.qty || 0);

  return (
    <div
      key={i}
      className="flex justify-between items-center text-sm mb-3 border-b border-gray-800 pb-2"
    >
      <div>
        <p className="font-medium">
          {item.name} × {item.qty}
        </p>

        <p className="text-xs text-gray-400">
          ₦{item.amount?.toLocaleString()} each
        </p>
      </div>

      <p className="text-yellow-500 font-semibold">
        ₦{itemTotal.toLocaleString()}
      </p>
    </div>
  );
})}

           <div className="border-t border-gray-700 mt-4 pt-4 space-y-1">
  <p className="text-sm text-gray-400">
    Total Items: {totalItems}
  </p>

  <p className="text-lg font-bold text-yellow-500">
    Total: ₦{totalPrice.toLocaleString()}
  </p>
</div>

            <button
  onClick={handleOrder}
  className="mt-4 w-full py-3 bg-yellow-500 text-black rounded-md"
>
  Confirm Order
</button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}