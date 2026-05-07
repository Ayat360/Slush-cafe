import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { cart, toggleCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

const navLinks = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "GALLERY", id: "gallery" },
  { name: "CONTACT", id: "contact" }
];

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl shadow-xl py-3"
            : "bg-black/40 backdrop-blur-md py-5"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* 🔥 LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/logo.png"
              alt="logo"
              className="h-20 md:h-28 object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            />

            <h1 className="hidden md:block text-xl font-bold font-luxury tracking-wider">
              SLUSH <span className="text-yellow-500">CAFE</span>
            </h1>
          </Link>

          {/* 🔥 DESKTOP LINKS */}
<ul className="hidden md:flex gap-10">
  {navLinks.map((link) => (
    <li
      key={link.id}
      onClick={() => {
        if (location.pathname !== "/") {
          window.location.href = "/";
          setTimeout(() => {
            document.getElementById(link.id)?.scrollIntoView({
              behavior: "smooth"
            });
          }, 200);
        } else {
          document.getElementById(link.id)?.scrollIntoView({
            behavior: "smooth"
          });
        }
      }}
      className="cursor-pointer hover:text-yellow-500"
    >
      {link.name}
    </li>
  ))}

  {/* 🔥 ORDER ONLINE */}
  <Link to="/menu" className="text-yellow-500">
    ORDER ONLINE
  </Link>
</ul>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CART */}
            <motion.div
              onClick={toggleCart}
              whileTap={{ scale: 0.9 }}
              className="relative cursor-pointer"
            >
              <FiShoppingCart
                size={26}
                className="text-white hover:text-yellow-500 transition"
              />

              {cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full font-bold"
                >
                  {cart.length}
                </motion.span>
              )}
            </motion.div>

            {/* MOBILE MENU BTN */}
            <div
              className="md:hidden text-white cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={26} />
            </div>

          </div>
        </div>
      </motion.nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-72 bg-black z-50 p-6"
            >
              {/* CLOSE */}
              <div className="flex justify-end mb-8">
                <FiX
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* LINKS */}
<div className="flex flex-col gap-6 text-lg font-luxury">

  {navLinks.map((link) => (
    <div
      key={link.id}
      onClick={() => {
        setOpen(false);

        if (location.pathname !== "/") {
          window.location.href = "/";
          setTimeout(() => {
            document.getElementById(link.id)?.scrollIntoView({
              behavior: "smooth"
            });
          }, 200);
        } else {
          document.getElementById(link.id)?.scrollIntoView({
            behavior: "smooth"
          });
        }
      }}
      className="text-gray-300 cursor-pointer"
    >
      {link.name}
    </div>
  ))}

  {/* 🔥 ORDER ONLINE */}
  <Link to="/menu" onClick={() => setOpen(false)}>
    ORDER ONLINE
  </Link>

</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}