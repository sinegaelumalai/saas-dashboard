import {
  FaBell,
  FaCheckCircle,
  FaExclamationCircle,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "You have received a new customer order.",
    time: "2 min ago",
    icon: <FaBell className="text-indigo-600" />,
    bg: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Invoice #2456 has been paid.",
    time: "10 min ago",
    icon: <FaCheckCircle className="text-green-600" />,
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "System Update",
    message: "Dashboard updated successfully.",
    time: "1 hour ago",
    icon: <FaExclamationCircle className="text-yellow-500" />,
    bg: "bg-yellow-100",
  },
  {
    id: 4,
    title: "New Message",
    message: "You received a message from David.",
    time: "3 hours ago",
    icon: <FaEnvelope className="text-pink-500" />,
    bg: "bg-pink-100",
  },
];

const Notification = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} className="space-y-5">

        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center hover:shadow-md transition"
          >

            <div className="flex items-center gap-4">

              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg}`}>
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.message}
                </p>
              </div>

            </div>

            <span className="text-gray-400 text-sm">
              {item.time}
            </span>

          </div>
        ))}

      </motion.div>
    </motion.div>
  );
};

export default Notification;