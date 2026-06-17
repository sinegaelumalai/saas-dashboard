import { motion } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const orders = [
  {
    id: "#876364",
    product: "Camera Lens",
    image: img1,
    price: "$178",
    order: "325",
    amount: "$1,46,660",
  },
  {
    id: "#876368",
    product: "Black Sleep Dress",
    image: img2,
    price: "$14",
    order: "53",
    amount: "$46,660",
  },
  {
    id: "#876412",
    product: "Argan Oil",
    image: img3,
    price: "$21",
    order: "78",
    amount: "$3,46,676",
  },
  {
    id: "#876621",
    product: "EAU DE Parfum",
    image: img4,
    price: "$32",
    order: "98",
    amount: "$3,46,981",
  },
];

const RecentOrders = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Recent Orders
        </h3>

        <button className="text-gray-400 text-xl hover:text-gray-600">
          •••
        </button>
      </div>

      {/* Table */}
      <div className="w-full">
        <table className="w-full">

          <thead>
           <tr className="border-b border-gray-300 text-gray-500 text-sm">
              <th className="text-left py-3">Tracking No</th>
              <th className="text-left py-3">Product Name</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">Total Order</th>
              <th className="text-right py-3">Total Amount</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((item) => (
              <motion.tr
                key={item.id}
                className="shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <td className="py-4 font-medium text-gray-700">
                  {item.id}
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center">

                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-8 h-8 object-contain"
                      />

                    </div>

                    <span className="font-medium text-gray-700">
                      {item.product}
                    </span>

                  </div>
                </td>

                <td className="text-gray-700">
                  {item.price}
                </td>

                <td>
                  <span className="bg-cyan-100 text-cyan-600 px-5 py-2 rounded-xl font-semibold">
                    {item.order}
                  </span>
                </td>

                <td className="text-right font-medium text-gray-700">
                  {item.amount}
                </td>

              </motion.tr>
            ))}

          </tbody>

        </table>
      </div>
    </motion.div>
  );
};

export default RecentOrders;