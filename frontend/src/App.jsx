import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white p-10 rounded-3xl backdrop-blur-lg bg-white/10 shadow-2xl"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-bold mb-4"
        >
          ⚡ Neeha’s DevOps Universe
        </motion.h1>

        <p className="opacity-70 mb-6">
          Code → Docker → Cloud → Alive 🚀
        </p>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg"
        >
          Enter
        </motion.button>
      </motion.div>

    </div>
  );
}
