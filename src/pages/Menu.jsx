import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const categories = ["All", "Rice", "Stew", "Pasta", "Sides"];


const menuItems = [
  // ===== RICE =====
  {
    name: "Seafood Fried Rice",
    category: "Rice",
    desc: "Basmati, Prawn, Snails",
    price: "2L – ₦52k | 3L – ₦78k | 4L – ₦104k",
    amount: 52000,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Fried Rice",
    category: "Rice",
    desc: "With any protein of your choice",
    price: "2L – ₦40k | 3L – ₦55k | 4L – ₦68k",
    amount: 40000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    name: "Native Rice",
    category: "Rice",
    desc: "With any protein of your choice",
    price: "2L – ₦40k | 3L – ₦55k | 4L – ₦68k",
    amount: 40000,
    image: "https://images.unsplash.com/photo-1512058564366-c9e3e0460d73"
  },
  {
    name: "Coconut Rice",
    category: "Rice",
    desc: "With any protein of your choice",
    price: "2L – ₦35k | 3L – ₦45k | 4L – ₦60k",
    amount: 35000,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },

  // ===== STEW =====
  {
    name: "Assorted Stew / Cow Leg Stew",
    category: "Stew",
    price: "3L – ₦60k | 4L – ₦80k",
    amount: 60000,
    image: "https://images.unsplash.com/photo-1604908554163-8d43c7b84e5d"
  },
  {
    name: "Native Stew",
    category: "Stew",
    desc: "With any protein",
    price: "3L – ₦65k | 4L – ₦85k",
    amount: 65000,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },

  // ===== SIDES =====
  { name: "Turkey", category: "Sides", price: "₦7000", amount: 7000, image: "https://images.unsplash.com/photo-1604908176997-4316cbe0f2df" },
  { name: "Beef", category: "Sides", price: "₦3500", amount: 3500, image: "https://images.unsplash.com/photo-1544025162-d76694265947" },
  { name: "Barbecue Turkey", category: "Sides", price: "₦8500", amount: 8500, image: "https://images.unsplash.com/photo-1604908176997-4316cbe0f2df" },
  { name: "Hake Fish", category: "Sides", price: "₦7000", amount: 7000, image: "https://images.unsplash.com/photo-1604908177522-040d8bb6f5be" },
  { name: "Croaker Fish", category: "Sides", price: "₦7000", amount: 7000, image: "https://images.unsplash.com/photo-1604908177522-040d8bb6f5be" },
  { name: "Jumbo Snail", category: "Sides", price: "₦9000", amount: 9000, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { name: "Goat Meat", category: "Sides", price: "₦5000", amount: 5000, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { name: "Egg", category: "Sides", price: "₦500", amount: 500, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f" },
  { name: "Salad", category: "Sides", price: "₦5000", amount: 5000, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "Plantain", category: "Sides", price: "₦3000", amount: 3000, image: "https://images.unsplash.com/photo-1604908177522-040d8bb6f5be" }
];
export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <div className="relative pt-28 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">

  {/* 🔥 PREMIUM BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 opacity-10 bg-cover bg-center scale-110"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')"
    }}
  ></div>

  {/* 🔥 DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/90"></div>

  {/* 🔥 GOLD GRADIENT */}
  <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-transparent"className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"></div>

  {/* 🔥 MOVING CURVED LIGHTNING ORBS */}
  <motion.div
    animate={{
      x: [0, 120, -80, 0],
      y: [0, -100, 80, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute top-20 left-10 w-72 h-72 rounded-full border border-yellow-500/20 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(234,179,8,0.25), transparent)"
    }}
  />

  <motion.div
    animate={{
      x: [0, -140, 100, 0],
      y: [0, 120, -100, 0],
      rotate: [360, 180, 0]
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-yellow-500/10 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(234,179,8,0.15), transparent)"
    }}
  />

  {/* 🔥 CHASING CURVED LIGHTNING */}
  <svg
    className="absolute inset-0 w-full h-full opacity-30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M200,300 C400,100 600,500 900,300"
      stroke="#eab308"
      strokeWidth="3"
      fill="transparent"
      strokeLinecap="round"
      filter="url(#glow)"
      animate={{
        pathLength: [0, 1, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    <motion.path
      d="M100,500 C500,200 700,700 1200,400"
      stroke="#facc15"
      strokeWidth="2"
      fill="transparent"
      strokeLinecap="round"
      filter="url(#glow)"
      animate={{
        pathLength: [0, 1, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />

    <motion.path
      d="M300,100 C700,400 900,50 1400,300"
      stroke="#fde047"
      strokeWidth="2"
      fill="transparent"
      strokeLinecap="round"
      filter="url(#glow)"
      animate={{
        pathLength: [0, 1, 0]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />

    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>

  {/* 🔥 CONTENT */}
  <div className="relative z-10">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-wide">OUR MENU</h1>
        <p className="text-gray-400 mt-2 text-sm">
          Explore our delicious meals made with love and the finest ingredients
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="bg-[#111] p-5 rounded-xl h-fit">
          <h2 className="mb-5 text-sm text-gray-400 tracking-wider">
            CATEGORIES
          </h2>

          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setActive(cat)}
              className={`cursor-pointer px-4 py-3 rounded-lg mb-2 transition ${
                active === cat
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* GRID */}
<div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {filtered.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="bg-[#111] rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-yellow-500/10 transition"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          className="h-44 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>

        {item.desc && (
          <p className="text-gray-400 text-xs mt-1">
            {item.desc}
          </p>
        )}

        <p className="text-yellow-500 mt-2 text-sm">
          {item.price}
        </p>

        <button
          onClick={() =>
  addToCart({
    ...item,
    qty: 1,
    amount: item.amount || 0
  })
}
          className="mt-4 w-full py-2 bg-yellow-500 text-black rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  ))}

</div>
      </div>

      {/* 🔥 CONTENT WRAPPER END */}
      </div>

    </div>
  );
}