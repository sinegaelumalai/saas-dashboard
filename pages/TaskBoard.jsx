import { useState } from "react";
import ScheduleSidebar from "../components/ScheduleSidebar";
import { motion } from "framer-motion";
import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaTrash,
    FaPen,
} from "react-icons/fa";

const TaskBoard = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            date: "12 Dec, 2021",
            time: "10.15 AM",
            location: "Office Meeting",
        },
        {
            id: 2,
            date: "10 Dec, 2021",
            time: "11.20 AM",
            location: "Home",
        },
        {
            id: 3,
            date: "09 Dec, 2021",
            time: "11.45 AM",
            location: "Friends Zone",
        },
        {
            id: 4,
            date: "08 Dec, 2021",
            time: "12.15 PM",
            location: "Office Meeting",
        },
        {
            id: 5,
            date: "07 Dec, 2021",
            time: "01.20 PM",
            location: "Home",
        },
        {
            id: 6,
            date: "05 Dec, 2021",
            time: "10.15 AM",
            location: "Meeting Outside",
        },
        {
            id: 7,
            date: "04 Dec, 2021",
            time: "11.15 AM",
            location: "Office Meeting",
        },
        {
            id: 8,
            date: "04 Dec, 2021",
            time: "01.25 PM",
            location: "Home",
        },
        {
            id: 9,
            date: "02 Dec, 2021",
            time: "10.15 AM",
            location: "Friends",
        },
        {
            id: 10,
            date: "01 Dec, 2021",
            time: "04.30 PM",
            location: "Meeting Outside",
        },
    ]);

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-3">
                    <ScheduleSidebar />
                </div>

                <div className="col-span-9">

                    <div className="space-y-4">

                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between"
                            >

                                <input type="checkbox" />

                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-blue-500" />
                                    {task.date}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaClock className="text-gray-500" />
                                    {task.time}
                                </div>

                                <div className="bg-indigo-100 text-indigo-600 px-5 py-2 rounded-full flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    {task.location}
                                </div>

                                <button className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <FaPen className="text-yellow-500" />
                                </button>

                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"
                                >
                                    <FaTrash className="text-red-500" />
                                </button>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default TaskBoard;