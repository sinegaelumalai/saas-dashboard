import { NavLink } from "react-router-dom";
import UpgradeCard from "./UpgradeCard";
import ProfileCard from "./ProfileCard";
import base from "../assets/base.png";

import {
  FaThLarge,
  FaChartBar,
  FaFileInvoice,
  FaCalendarAlt,
  FaEnvelope,
  FaBell,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaThLarge />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Invoice",
      path: "/invoices",
      icon: <FaFileInvoice />,
    },
    {
      name: "Schedule",
      path: "/tasks",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <FaEnvelope />,
      badge: "49",
    },
    {
      name: "Notification",
      path: "/notifications",
      icon: <FaBell />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#F5F5F7] flex flex-col">

      {/* Logo */}

      <div className="flex items-center gap-4 px-8 pt-10 pb-8">

        <img
          src={base}
          alt="logo"
          className="w-12 h-12 object-contain"
        />

        <h1 className="text-4xl font-semibold text-gray-900">
          Base
        </h1>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-6">

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-4 rounded-xl mb-2 transition-all ${isActive
                ? "text-indigo-600"
                : "text-gray-500 hover:text-indigo-600"
              }`
            }
          >
            <div className="flex items-center gap-4">

              <span className="text-lg">
                {menu.icon}
              </span>

              <span className="font-medium">
                {menu.name}
              </span>

            </div>

            {menu.badge && (
              <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                {menu.badge}
              </span>
            )}

          </NavLink>
        ))}

      </nav>

      {/* Bottom */}

      <div className="p-5">

        <UpgradeCard />

        <ProfileCard />

      </div>

    </aside>
  );
};

export default Sidebar;