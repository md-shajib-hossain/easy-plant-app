//
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ErrorGlobal = ({ message, isVisible, onClose }) => {
  // Animation variants for shake effect
  const shakeVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: [0, -10, 10, -10, 10, 0], // Shake effect
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-sm w-full p-4 bg-gradient-to-r from-green-600 to-green-100 border-b-2 border-green-600 text-white rounded-lg shadow-lg flex justify-between items-center"
          variants={shakeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{message}</span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-white hover:text-green-200 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ErrorGlobal.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

ErrorGlobal.defaultProps = {
  onClose: null,
};

export default ErrorGlobal;
