import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import {
  FiShoppingCart,
  FiMenu,
  FiX
} from "react-icons/fi";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

export default function Navbar() {
  const { cart, toggleCart } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // 🔥 SCROLL TO SECTION
  const scrollToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }, 300);

    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl py-2"
            : "bg-black/30 backdrop-blur-xl py-3"
        }`}
      >

        {/* 🔥 GOLD GLOW */}
        <div className="absolute inset-0 bg-yellow-500/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <motion.img
              whileHover={{
                rotate: -3,
                scale: 1.05
              }}
              src="/logo.png"
              alt="logo"
              className="h-12 md:h-14 object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]"
            />

            <div className="hidden md:block">

              {/* 🔥 BRAND */}
              <h1 className="text-2xl tracking-wide font-black uppercase">
                <span className="text-white">
                  SLUSH
                </span>{" "}
                <span className="text-yellow-500">
                  CAFE
                </span>
              </h1>

              <p className="text-[10px] tracking-[4px] uppercase text-gray-400">
                Premium Restaurant
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP LINKS ================= */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() =>
                  scrollToSection(link.id)
                }
                className="group relative text-sm uppercase tracking-[2px] text-gray-200 cursor-pointer transition"
              >

                <span className="relative z-10 group-hover:text-yellow-500 transition duration-300">
                  {link.name}
                </span>

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>

              </li>
            ))}

            {/* 🔥 ORDER BTN */}
            <Link to="/menu">

              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg hover:shadow-yellow-500/40 transition"
              >
                ORDER ONLINE
              </motion.button>

            </Link>

          </ul>

          {/* ================= RIGHT ================= */}
          <div className="flex items-center gap-4">

            {/* CART */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative cursor-pointer"
            >

              <FiShoppingCart
                size={22}
                className="hover:text-yellow-500 transition"
              />

              {cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 min-w-4.5 h-4.5 flex items-center justify-center rounded-full bg-yellow-500 text-black text-[10px] font-bold"
                >
                  {cart.length}
                </motion.span>
              )}

            </motion.div>

            {/* MOBILE MENU */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="md:hidden"
            >
              <FiMenu size={24} />
            </motion.button>

          </div>

        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>

        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120
              }}
              className="fixed top-0 right-0 h-full w-80 bg-[#090909] border-l border-white/10 z-50 p-6"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-12">

                <h2 className="text-xl font-bold">
                  MENU
                </h2>

                <button
                  onClick={() => setOpen(false)}
                >
                  <FiX size={26} />
                </button>

              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-7">

                {navLinks.map((link) => (
                  <div
                    key={link.id}
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                    className="text-lg uppercase tracking-[3px] text-gray-300 hover:text-yellow-500 transition cursor-pointer"
                  >
                    {link.name}
                  </div>
                ))}

                {/* ORDER BUTTON */}
                <Link
                  to="/menu"
                  onClick={() => setOpen(false)}
                >

                  <button className="mt-4 w-full py-4 rounded-full bg-yellow-500 text-black font-bold tracking-wide">
                    ORDER ONLINE
                  </button>

                </Link>

              </div>

            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  );
}