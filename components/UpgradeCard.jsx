import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const UpgradeCard = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-2xl p-4 text-center mt-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-800"
          : "bg-indigo-50"
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <h3
        className={`font-semibold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Premium Plan
      </h3>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl w-full transition">
        Upgrade Now
      </button>
    </div>
  );
};

export default UpgradeCard;