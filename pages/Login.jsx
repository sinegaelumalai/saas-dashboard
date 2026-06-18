import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import loginpage from "../assets/loginpage.png";
import { motion } from "framer-motion";
import base from "../assets/base.png";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
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

    if (!password.trim()) {
      toast.warning("Password is required");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Login successful!");

      window.scrollTo(0, 0);

      navigate("/dashboard", { replace: true });
    }, 1200);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#f5f6fa] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white w-full max-w-6xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center px-5 py-6 sm:px-8 md:px-8 lg:px-10">

          <div className="flex flex-col items-center mb-5">

              <img
                src={base}
                alt="Base Logo"
                className="w-15 h-15 object-contain"
              />
           

            <h1 className="text-3xl font-bold mt-3">
              Log in
            </h1>

          </div>

          {/* Social */}
          <div className="flex gap-3 mb-4">

            <button
              type="button"
              className="flex-1 border border-gray-200 rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <FaGoogle />
              Google
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-200 rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <FaFacebookF />
              Facebook
            </button>

          </div>

          <div className="flex items-center mb-4">

            <div className="flex-1 border-t"></div>

            <span className="px-3 text-gray-400 text-sm">
              Or
            </span>

            <div className="flex-1 border-t"></div>

          </div>

          <form onSubmit={handleLogin} className="space-y-3">

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>

              <label className="block text-sm font-medium mb-1">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-indigo-600 hover:underline"
              >
                Reset Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

          </form>

          <p className="text-center mt-5 text-gray-600 text-sm">

            Don't have an account?

            <Link
              to="/register"
              className="ml-1 text-indigo-600 font-semibold hover:underline"
            >
              New Account
            </Link>

          </p>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center justify-center bg-[#fafafa] p-6">

          <img
            src={loginpage}
            alt="login"
            className="w-[75%] lg:w-[85%] max-w-md object-contain"
          />

        </div>

      </motion.div>

    </motion.div>
  );
};

export default Login;