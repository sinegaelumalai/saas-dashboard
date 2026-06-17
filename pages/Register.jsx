import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import signup from "../assets/signup.png";

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

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/confirm");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-4 py-6">
      <div className="bg-white w-full max-w-6xl rounded-2xl grid lg:grid-cols-2 shadow-lg">

        {/* LEFT SIDE */}
        <div className="px-10 py-8 md:px-12 md:py-8 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 shadow-lg rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl">
              ⌁
            </div>

            <h1 className="text-3xl font-bold mt-3">
              Sign Up
            </h1>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-5">
            <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 text-sm">
              <FaGoogle />
              Google
            </button>

            <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 text-sm">
              <FaFacebookF />
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t"></div>
            <span className="px-4 text-gray-400 text-sm">Or</span>
            <div className="flex-1 border-t"></div>
          </div>

          <form onSubmit={handleRegister}>

            <div className="mb-4">
              <label className="block mb-2 text-sm">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Jiangyu"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="johnkevine4362"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mb-6 text-xs text-gray-500">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />

              <p>
                By creating an account you agree to the
                <span className="text-indigo-500">
                  {" "}terms of use
                </span>
                {" "}and our
                <span className="text-indigo-500">
                  {" "}privacy policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
            >
              Create account
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-indigo-600"
            >
              Log in
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#fafafa] flex items-center justify-center p-10">

          <img
            src={signup}
            alt="signup"
            className="w-[80%]"
          />

        </div>

      </div>
    </div>
  );
};

export default Register;