import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import loginpage from "../assets/loginpage.png";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      window.scrollTo(0, 0);

      navigate("/dashboard", { replace: true });

    }, 1200);

  };   // <-- close handleLogin here

  return (
    <motion.div
      className="h-screen overflow-hidden bg-[#f5f6fa] flex items-center justify-center px-4 py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white w-full max-w-6xl rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-lg"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* LEFT */}

        <div className="px-10 py-8 md:px-12 md:py-8 flex flex-col justify-center">

          <div className="flex flex-col items-center mb-8">

            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
              ⌁
            </div>

            <h1 className="text-4xl font-bold mt-6">
              Log in
            </h1>

          </div>

          {/* SOCIAL */}

          <div className="flex gap-4 mb-6">

            <button
              type="button"
              className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-xl py-3 flex items-center justify-center gap-2 transition"
            >
              <FaGoogle />
              Google
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-xl py-3 flex items-center justify-center gap-2 transition"
            >
              <FaFacebookF />
              Facebook
            </button>

          </div>

          {/* OR */}

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-200"></div>

            <span className="px-4 text-gray-400 text-sm">
              Or
            </span>

            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* FORM */}

          <form onSubmit={handleLogin}>

            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 p-4 rounded-xl outline-none mb-5 focus:ring-2 focus:ring-indigo-500"
            />

            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="relative mb-5">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            <div className="flex justify-between items-center text-sm mb-6">

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
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl transition-all duration-300 font-medium"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">

            Don't have account yet?{" "}

            <Link
              to="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              New Account
            </Link>

          </p>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hidden md:flex bg-[#fafafa] items-center justify-center p-12">

          <img
            src={loginpage}
            alt="login"
            className="w-[85%] max-w-xl hover:scale-105 transition duration-500"
          />

        </div>

      </motion.div>

    </motion.div>
  );
};

export default Login;