import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

const DashboardLayout = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex h-screen overflow-hidden transition-all duration-300 ${darkMode
        ? "bg-gray-900"
        : "bg-gray-100"
        }`}
    >
      {/* Sidebar */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto hide-scrollbar main-scroll">
        <Header />

        <main
          className={`p-6 min-h-full transition-all duration-300 ${darkMode
              ? "bg-gray-900"
              : "bg-gray-100"
            }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;