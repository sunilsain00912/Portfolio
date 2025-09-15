import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://backendrender-3-9pbs.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponseMsg(data.message);
      setForm({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      setResponseMsg("❌ Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white flex flex-col items-center px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      {/* Grid: Form + Info */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* === Left: Form === */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 rounded-xl border border-purple-500/30 shadow-lg space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-black border border-purple-500/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-black border border-purple-500/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-black border border-purple-500/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168,85,247,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {responseMsg && (
            <p className="text-center text-sm text-gray-300 mt-4">
              {responseMsg}
            </p>
          )}
        </motion.form>

        {/* === Right: Contact Info === */}
        <motion.div
          className="space-y-6 bg-zinc-900 p-8 rounded-xl border border-purple-500/30 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            Contact Information
          </h3>

          <div className="flex items-center gap-4 text-gray-300">
            <FaEnvelope className="text-purple-400 text-xl" />
            <span>sunilsain0912@email.com</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <FaPhoneAlt className="text-purple-400 text-xl" />
            <span>+91 960XXXXX</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <FaMapMarkerAlt className="text-purple-400 text-xl" />
            <span>Rajasthan, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <motion.a
              href="https://linkedin.com/in/sunil-kumar-sain-1a97b935a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 text-2xl hover:text-purple-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/sunilsain00912"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 text-2xl hover:text-purple-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
