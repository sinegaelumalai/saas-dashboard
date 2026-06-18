import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import base from "../assets/base.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      toast.warning("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Password reset link sent successfully!");

    setTimeout(() => {
      navigate("/confirm");
    }, 1000);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#f5f6fa] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white w-full max-w-md rounded-3xl p-8 md:p-12 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Logo */}

        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={base}
            alt="Base Logo"
            className="w-15 h-15 object-contain"
          />

          <h1 className="text-4xl font-bold mt-6">
            Recover
          </h1>

          <p className="text-gray-500 mt-2 text-center">
            Enter your email address and we'll send
            you a password reset link.
          </p>
        </motion.div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-10"
        >
          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 p-4 rounded-xl outline-none mb-6 focus:ring-2 focus:ring-indigo-500"
          />

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(99,102,241,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-medium"
          >
            Reset Your Password
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ForgotPassword;