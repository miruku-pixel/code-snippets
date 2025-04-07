import { motion } from "framer-motion";

const AnimatedButton = ({ text = "Click Me", onClick }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className="px-6 py-3 rounded-xl border-2 
      border-indigo-600 bg-white text-indigo-600 
      font-semibold hover:bg-indigo-50 focus:outline-none"
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
