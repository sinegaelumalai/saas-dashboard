import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Confirm = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="min-h-screen bg-[#f5f6fa] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="bg-white w-full max-w-md rounded-3xl p-8 md:p-12 text-center shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                {/* Success Icon */}

                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 150,
                    }}
                >
                    <div className="w-36 h-36 rounded-full bg-indigo-50 flex items-center justify-center text-7xl shadow-sm">
                        👍
                    </div>
                </motion.div>

                {/* Message */}

                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Success!
                </motion.h2>

                <motion.p
                    className="text-gray-500 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Your account has been successfully created.
                </motion.p>

                {/* Button */}

                <motion.button
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 25px rgba(99,102,241,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-medium"
                >
                    Go to Login
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Confirm;