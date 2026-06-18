import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import signup from "../assets/signup.png";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 const handleRegister = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.fullName.trim()) {
    toast.warning("Full Name is required");
    return;
  }

  if (formData.fullName.trim().length < 3) {
    toast.error("Full Name must be at least 3 characters");
    return;
  }

  if (!formData.email.trim()) {
    toast.warning("Email is required");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  if (!formData.username.trim()) {
    toast.warning("Username is required");
    return;
  }

  if (formData.username.trim().length < 4) {
    toast.error("Username must be at least 4 characters");
    return;
  }

  if (!formData.password.trim()) {
    toast.warning("Password is required");
    return;
  }

  if (formData.password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return;
  }

  if (!formData.agree) {
    toast.warning("Please accept the Terms & Privacy Policy");
    return;
  }

  localStorage.setItem("user", JSON.stringify(formData));

  toast.success("Account created successfully!");

  setTimeout(() => {
    navigate("/confirm");
  }, 1000);
};


  return (
    <motion.div initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }} className="h-screen bg-[#f5f6fa] flex items-center justify-center p-3 overflow-hidden">

      <div className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-5 py-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="flex flex-col items-center mb-3">

            <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl shadow-md">
              ⌁
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mt-2">
              Sign Up
            </h1>

          </div>

          {/* Social Buttons */}
          <div className="flex gap-2 mb-3">

            <button className="flex-1 border border-gray-200 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <FaGoogle />
              Google
            </button>

            <button className="flex-1 border border-gray-200 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <FaFacebookF />
              Facebook
            </button>

          </div>

          {/* Divider */}
          <div className="flex items-center mb-3">

            <div className="flex-1 border-t"></div>

            <span className="px-3 text-gray-400 text-sm">
              Or
            </span>

            <div className="flex-1 border-t"></div>

          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-2">

            <div>

              <label className="block text-sm mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Jiangyu"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <div>

              <label className="block text-sm mb-1">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <div>

              <label className="block text-sm mb-1">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="johnkevine4362"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <div>

              <label className="block text-sm mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-[11px] text-gray-500">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />

              <p>
                By creating an account you agree to the
                <span className="text-indigo-600"> terms of use </span>
                and our
                <span className="text-indigo-600"> privacy policy</span>
              </p>

            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-3 text-sm text-gray-600">

            Already have an account?

            <Link
              to="/"
              className="ml-1 text-indigo-600 font-semibold hover:underline"
            >
              Log in
            </Link>

          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex bg-[#fafafa] items-center justify-center p-4">

          <img
            src={signup}
            alt="signup"
            className="w-[75%] lg:w-[85%] max-w-md object-contain"
          />

        </div>

      </div>

    </motion.div>
  );
};

export default Register;