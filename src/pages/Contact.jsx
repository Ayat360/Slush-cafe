import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-white overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      {/* 🔥 HEADER */}
      <Reveal>
        <div className="text-center mb-16 relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4"
          >
            Contact Slush Cafe
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold font-luxury leading-tight">
            Let's Talk <span className="text-yellow-500">Food & Vibes</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            Reservations, premium dining experience, private events or feedback —
            our team is always ready to connect with you.
          </p>

        </div>
      </Reveal>

      {/* 🔥 MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10 relative z-10">

        {/* ================= FORM ================= */}
        <Reveal>
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 shadow-2xl overflow-hidden"
          >

            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"></div>

            <div className="relative z-10">

              <h2 className="text-2xl font-bold mb-2">
                Send A Message
              </h2>

              <p className="text-gray-400 mb-8">
                Fill the form and our team will respond fast-fast 🚀
              </p>

              <div className="space-y-5">

                {/* INPUT */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-yellow-500 transition"
                  />
                </div>

                {/* SELECT */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Request Type
                  </label>

                  <select className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-yellow-500 transition text-gray-300">
                    <option>Reservation</option>
                    <option>Feedback</option>
                    <option>Complaint</option>
                    <option>Private Event</option>
                    <option>Business Inquiry</option>
                  </select>
                </div>

                {/* TEXTAREA */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Message
                  </label>

                  <textarea
                    placeholder="Tell us what you need..."
                    className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-yellow-500 transition resize-none"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full relative overflow-hidden bg-yellow-500 text-black py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-yellow-500/20"
                >
                  <span className="relative z-10">
                    SEND MESSAGE
                  </span>

                  <span className="absolute inset-0 bg-white/20 scale-0 hover:scale-100 transition duration-500 rounded-full"></span>
                </motion.button>

              </div>

            </div>
          </motion.div>
        </Reveal>

        {/* ================= INFO SIDE ================= */}
        <Reveal delay={0.2}>
          <div className="space-y-8">

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">

              {/* PHONE */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5">
                  <FiPhone size={24} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Phone Number
                </h3>

                <p className="text-gray-400">
                  07082798562
                </p>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5">
                  <FiMail size={24} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Email Address
                </h3>

                <p className="text-gray-400 break-all">
                  support@slushcafe.com
                </p>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5">
                  <FiMapPin size={24} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Lagos, Nigeria
                </p>
              </motion.div>

              {/* OPEN HOURS */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5">
                  <FiClock size={24} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Open Hours
                </h3>

                <p className="text-gray-400">
                  Mon - Sun / 9AM - 11PM
                </p>
              </motion.div>

            </div>

            {/* MAP */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 h-[320px] bg-[#0f0f0f]"
            >

              {/* 👇 REPLACE WITH YOUR MAP / IMAGE */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                Map / Restaurant Image Here
              </div>

              {/* floating badge */}
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl">
                <p className="text-yellow-500 text-sm">
                  Slush Cafe
                </p>

                <p className="text-xs text-gray-400">
                  Premium Dining Experience
                </p>
              </div>

            </motion.div>

            {/* SOCIALS */}
            <div className="flex gap-4">

              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:border-yellow-500/50 hover:text-yellow-500 transition"
                >
                  <Icon size={22} />
                </motion.div>
              ))}

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  );
}