import {
    FaCheckCircle,
    FaEllipsisH,
    FaPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";

const tasks = [
    {
        time: "09.00 AM",
        title: "Graphic Design",
        priority: "Low",
        color: "bg-red-400",
    },
    {
        time: "11.00 AM",
        title: "Dashboard Design",
        priority: "High",
        color: "bg-cyan-500",
    },
    {
        time: "01.00 PM",
        title: "Logo Design",
        priority: "High",
        color: "bg-cyan-500",
    },
    {
        time: "03.00 PM",
        title: "Web Design",
        priority: "High",
        color: "bg-cyan-500",
    },
];

const Settings = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} className="p-1">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-2xl font-bold">
                    Task Preview
                </h1>

                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                    + Add Task
                </button>

            </div>

            <div className="flex gap-4 mb-8">

                <button className="bg-white px-6 py-3 rounded-lg shadow-sm">
                    List
                </button>

                <button className="bg-white px-6 py-3 rounded-lg shadow-sm">
                    Board
                </button>

                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                    Timeline
                </button>

            </div>

            <div className="grid grid-cols-12 gap-6">

                {/* Left Panel */}

                <div className="col-span-3 bg-white rounded-3xl p-6 shadow-sm">

                    <button className="w-full bg-indigo-600 text-white py-4 rounded-xl mb-6">
                        To Do
                    </button>

                    <button className="w-full border py-4 rounded-xl mb-4">
                        Doing
                    </button>

                    <button className="w-full border py-4 rounded-xl">
                        Done
                    </button>

                </div>

                {/* Right Timeline */}

                <div className="col-span-9 bg-white rounded-3xl p-8 shadow-sm">

                    <div className="flex justify-between mb-10">

                        <div className="flex gap-10 text-gray-500">
                            <span>29</span>
                            <span>30</span>
                            <span>01</span>

                            <span className="bg-indigo-600 text-white px-5 py-3 rounded">
                                02
                            </span>

                            <span>03</span>
                            <span>04</span>
                            <span>05</span>
                            <span>06</span>
                            <span>07</span>
                            <span>08</span>
                        </div>

                    </div>

                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="flex items-center border-b border-gray-100 h-32"
                        >

                            <div className="w-32 text-sm text-gray-500">
                                {task.time}
                            </div>

                            <div className="flex-1">

                                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-5 w-[650px] flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <FaCheckCircle className="text-indigo-600" />

                                        <span className="font-medium">
                                            {task.title}
                                        </span>

                                    </div>

                                    <div className="flex items-center -space-x-2">

                                        <img
                                            src="https://i.pravatar.cc/35?img=1"
                                            className="w-8 h-8 rounded-full border-2 border-white"
                                        />

                                        <img
                                            src="https://i.pravatar.cc/35?img=2"
                                            className="w-8 h-8 rounded-full border-2 border-white"
                                        />

                                        <img
                                            src="https://i.pravatar.cc/35?img=3"
                                            className="w-8 h-8 rounded-full border-2 border-white"
                                        />

                                        <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                                            <FaPlus size={10} />
                                        </div>

                                    </div>

                                    <span
                                        className={`${task.color} text-white px-4 py-1 rounded-full text-sm`}
                                    >
                                        {task.priority}
                                    </span>

                                    <span className="bg-yellow-400 px-4 py-1 rounded-full text-sm">
                                        On Track
                                    </span>

                                    <FaEllipsisH className="text-gray-400" />

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </motion.div>
    );
};

export default Settings;