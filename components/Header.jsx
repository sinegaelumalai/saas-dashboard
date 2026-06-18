import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const { darkMode, toggleTheme } = useTheme();

  const pageTitle = {
    "/dashboard": "Dashboard",
    "/analytics": "Analytics",
    "/customers": "Customer List",
    "/invoices": "Invoices",
    "/calendar": "Calendar",
    "/tasks": "Task Board",
    "/products": "Product Analytics",
    "/messages": "Messages",
    "/notifications": "Notifications",
    "/settings": "Settings",
  };

  return (
    <header
      className={`h-16 flex items-center justify-between px-6 transition-all duration-300
      ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold">
        {pageTitle[location.pathname]}
      </h2>

      <button
        onClick={toggleTheme}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
        ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
            : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
        }`}
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </header>
  );
};

export default Header;