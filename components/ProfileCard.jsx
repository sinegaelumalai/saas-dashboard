import user from "../assets/user.png";
import { useTheme } from "../context/ThemeContext";

const ProfileCard = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex items-center gap-3 mt-6">
      <img
        src={user}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
      />

      <div>
        <h4
          className={`font-medium text-sm ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Easin Arafat
        </h4>

        <p
          className={`text-xs ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Free Account
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;