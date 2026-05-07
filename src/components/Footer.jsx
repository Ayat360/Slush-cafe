import { motion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUp
} from "react-icons/fi";

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative mt-32 border-t border-white/10 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      {/* 🔥 MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* ================= BRAND ================= */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              {/* 👇 YOUR LOGO */}
              <img
                src="/logo.png"
                alt="Slush Cafe"
                className="h-20 object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.35)]"
              />

              <div>
                <h1 className="text-3xl font-bold font-luxury tracking-widest">
                  SLUSH
                </h1>

                <p className="text-yellow-500 tracking-[4px] text-sm">
                  CAFE
                </p>
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-7">
              Premium restaurant experience built around flavor,
              culture, vibes and unforgettable moments.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.08 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:border-yellow-500/40 hover:text-yellow-500 transition"
                >
                  <Icon size={20} />
                </motion.div>
              ))}

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h2 className="text-xl font-semibold mb-6 text-yellow-500">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 text-gray-300">

              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact", id: "contact" }
              ].map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer hover:text-yellow-500 transition flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  {link.name}
                </motion.div>
              ))}

              {/* MENU PAGE */}
              <motion.a
                whileHover={{ x: 6 }}
                href="/menu"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Order Online
              </motion.a>

            </div>

          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>

            <h2 className="text-xl font-semibold mb-6 text-yellow-500">
              Contact Info
            </h2>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-4">
                <div className="mt-1 text-yellow-500">
                  <FiMapPin />
                </div>

                <p>
                  Lagos, Nigeria
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-yellow-500">
                  <FiPhone />
                </div>

                <p>
                  07082798562
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-yellow-500">
                  <FiMail />
                </div>

                <p>
                  support@slushcafe.com
                </p>
              </div>

            </div>

          </div>

          {/* ================= NEWSLETTER ================= */}
          <div>

            <h2 className="text-xl font-semibold mb-6 text-yellow-500">
              Newsletter
            </h2>

            <p className="text-gray-400 leading-7 mb-6">
              Subscribe to get updates on new meals,
              special offers and exclusive vibes 🍽️
            </p>

            <div className="space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-yellow-500 transition"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold shadow-lg shadow-yellow-500/20"
              >
                SUBSCRIBE
              </motion.button>

            </div>

          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Slush Cafe. Crafted with flavor, vibes & premium experience.
          </p>

          {/* BACK TO TOP */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
            className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:border-yellow-500/40 hover:text-yellow-500 transition"
          >
            Back To Top
            <FiArrowUp />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}