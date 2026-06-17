import StatCard from "../components/StatCard";
import RecentOrders from "../components/RecentOrders";
import TopProducts from "../components/TopProducts";
import { motion } from "framer-motion";

import {
  FaHeart,
  FaLock,
  FaShoppingBag,
  FaBriefcase,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const reportData = [
  { name: "10am", sales: 55 },
  { name: "11am", sales: 32 },
  { name: "12pm", sales: 58 },
  { name: "01pm", sales: 36 },
  { name: "02pm", sales: 24 },
  { name: "03pm", sales: 52 },
  { name: "04pm", sales: 14 },
  { name: "05pm", sales: 36 },
  { name: "06pm", sales: 39 },
  { name: "07pm", sales: 75 },
];

const analyticsData = [
  { name: "Sales", value: 55 },
  { name: "Distribute", value: 25 },
  { name: "Return", value: 20 },
];

const COLORS = [
  "#4F46E5",
  "#FBBF24",
  "#FB7185",
];

const Dashboard = () => {
  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >


        {/* Cards */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <StatCard
            title="Save Products"
            value="178+"
            icon={<FaHeart className="text-blue-500" />}
            color="bg-blue-100"
          />

          <StatCard
            title="Stock Products"
            value="20+"
            icon={<FaShoppingBag className="text-yellow-500" />}
            color="bg-yellow-100"
          />

          <StatCard
            title="Sales Products"
            value="190+"
            icon={<FaLock className="text-red-500" />}
            color="bg-red-100"
          />

          <StatCard
            title="Job Application"
            value="12+"
            icon={<FaBriefcase className="text-purple-500" />}
            color="bg-purple-100"
          />

        </motion.div>

        {/* Reports + Analytics */}

        <motion.div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          <motion.div
            className="xl:col-span-2 bg-white rounded-2xl p-5 shadow-sm"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >

            <h3 className="text-lg font-semibold mb-4">
              Reports
            </h3>

            <div className="h-[320px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={reportData}>

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8B5CF6"
                    strokeWidth={4}
                  />

                </LineChart>
              </ResponsiveContainer>

            </div>

          </motion.div>

          {/* Analytics */}

          <div className="bg-white rounded-2xl p-5 shadow-sm">

            <h3 className="text-lg font-semibold mb-4">
              Analytics
            </h3>

            <div className="flex flex-col items-center">

              <PieChart
                width={250}
                height={250}
              >

                <Pie
                  data={analyticsData}
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                >

                  {analyticsData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}

                </Pie>

              </PieChart>

              <h2 className="text-3xl font-bold">
                80%
              </h2>

              <p className="text-gray-500">
                Transactions
              </p>

              <div className="flex gap-4 mt-4 text-sm">

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  Sales
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  Distribute
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  Return
                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Recent Orders + Top Products */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <RecentOrders />
          </motion.div>

          <div>
            <TopProducts />
          </div>

        </div>

      </motion.div >
    </>
  );
};

export default Dashboard;