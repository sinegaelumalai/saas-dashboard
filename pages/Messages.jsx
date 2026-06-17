import {
  FaPhoneAlt,
  FaVideo,
  FaEllipsisV,
  FaPaperclip,
  FaPaperPlane,
  FaSmile,
  FaPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";

const users = [
  {
    name: "Shelby Goode",
    image: "https://i.pravatar.cc/50?img=11",
    time: "1 min ago",
  },
  {
    name: "Robert Bacins",
    image: "https://i.pravatar.cc/50?img=12",
    time: "9 min ago",
  },
  {
    name: "John Carlio",
    image: "https://i.pravatar.cc/50?img=13",
    time: "15 min ago",
    active: true,
  },
  {
    name: "Adriene Watson",
    image: "https://i.pravatar.cc/50?img=14",
    time: "21 min ago",
  },
  {
    name: "Jhon Deo",
    image: "https://i.pravatar.cc/50?img=15",
    time: "29 min ago",
  },
];

const Messages = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} className="grid grid-cols-12 gap-6">

      {/* Left Side */}

      <div className="col-span-4 bg-white rounded-2xl p-5">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Message
          </h2>

          <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
            <FaPlus />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 p-3 rounded-xl outline-none mb-6"
        />

        <div className="flex justify-around border-b mb-5">
          <button className="pb-3 text-gray-500">
            All
          </button>

          <button className="pb-3 border-b-2 border-indigo-600 text-indigo-600">
            Personal
          </button>

          <button className="pb-3 text-gray-500">
            Teams
          </button>
        </div>

        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-xl mb-3 ${
              user.active ? "bg-indigo-50" : ""
            }`}
          >
            <img
              src={user.image}
              alt=""
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">
              <h4 className="font-medium">
                {user.name}
              </h4>

              <p className="text-xs text-gray-500">
                Lorem Ipsum is simply dummy text
              </p>
            </div>

            <span className="text-xs text-gray-400">
              {user.time}
            </span>
          </div>
        ))}
      </div>

      {/* Right Side */}

      <div className="col-span-8 bg-white rounded-2xl p-6">

        {/* Header */}

        <div className="flex justify-between items-center border-b pb-4">

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/50?img=13"
              alt=""
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                John Carlio
              </h3>

              <p className="text-sm text-green-500">
                Online
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FaPhoneAlt />
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FaVideo />
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FaEllipsisV />
            </button>

          </div>

        </div>

        {/* Chat */}

        <div className="py-8 space-y-6 min-h-[500px]">

          <div className="flex justify-start">
            <div className="bg-blue-500 text-white p-4 rounded-xl max-w-md">
              Lorem Ipsum is simply dummy text of the printing industry.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-4 rounded-xl max-w-md">
              Lorem Ipsum is simply dummy text of the printing industry.
            </div>
          </div>

          <div className="flex justify-center gap-4">

            <img
              src="https://picsum.photos/180/120"
              className="rounded-xl"
            />

            <img
              src="https://picsum.photos/181/120"
              className="rounded-xl"
            />

          </div>

          <div className="flex justify-start">
            <div className="bg-blue-500 text-white p-4 rounded-xl max-w-md">
              Lorem Ipsum is simply dummy text of the printing industry.
            </div>
          </div>

        </div>

        {/* Input */}

        <div className="border rounded-xl p-4 flex items-center gap-4">

          <FaPaperclip className="text-gray-500" />

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 outline-none"
          />

          <FaSmile className="text-gray-500" />

          <button className="text-indigo-600">
            <FaPaperPlane />
          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default Messages;